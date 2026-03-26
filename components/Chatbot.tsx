'use client'

import React, { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface Message {
  role: 'user' | 'assistant'
  content: string
  file?: string
}

interface LeadData {
  name: string
  email: string
  company?: string
}

export default function Chatbot() {
  const [isGated, setIsGated] = useState(true)
  const [leadData, setLeadData] = useState<LeadData>({ name: '', email: '', company: '' })
  const [gateError, setGateError] = useState('')
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! Chat with me to ask questions about Bryan MacMurray\'s experience or to schedule an appointment.' }
  ])
  const [input, setInput] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesAreaRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [sessionId] = useState(() => Math.random().toString(36).substring(7))

  useEffect(() => {
    const savedLead = localStorage.getItem('lead_data')
    if (savedLead) {
      setIsGated(false)
    }
  }, [])

  const scrollToBottom = () => {
    // Scroll only the messages area, not the whole page
    if (messagesAreaRef.current && messages.length > 1) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const isWorkEmail = (email: string) => {
    const freeProviders = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'icloud.com', 'me.com', 'msn.com', 'live.com', 'aol.com',
      'protonmail.com', 'zoho.com', 'mail.com'
    ]
    const domain = email.split('@')[1]?.toLowerCase()
    return domain && !freeProviders.includes(domain)
  }

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGateError('')

    if (!leadData.name.trim()) {
      setGateError('Name is required.')
      return
    }

    if (!leadData.email.trim()) {
      setGateError('Email is required.')
      return
    }

    if (!isWorkEmail(leadData.email)) {
      setGateError('Please provide a valid work email address.')
      return
    }

    // Call the new webhook with userdata
    try {
      await fetch('https://n8n.contextaware.xyz/webhook/a444ecf0-d162-4cf4-a546-89fcbfd3624d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...leadData,
          sessionId,
          timestamp: new Date().toISOString(),
          source: 'chatbot_gate'
        }),
      })
    } catch (error) {
      console.error('Error sending lead data to new webhook:', error)
      // We continue even if the webhook fails to not block the user
    }

    localStorage.setItem('lead_data', JSON.stringify(leadData))
    setIsGated(false)
  }

  const sendMessage = async (text: string, attachedFile?: File | null) => {
    if (!text.trim() && !attachedFile) return

    const userMessage: Message = { role: 'user', content: text }
    if (attachedFile) {
      userMessage.file = attachedFile.name
    }
    
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('chatInput', text)
      formData.append('sessionId', sessionId)
      
      const savedLead = localStorage.getItem('lead_data')
      if (savedLead) {
        const lead = JSON.parse(savedLead)
        formData.append('userName', lead.name)
        formData.append('userEmail', lead.email)
        formData.append('userCompany', lead.company || '')
      }

      if (attachedFile) {
        formData.append('file', attachedFile)
      }

      const response = await fetch('https://n8n.contextaware.xyz/webhook/e5616171-e3b5-4c39-81d4-67409f9fa60a/chat', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to get response from n8n')
      }

      const data = await response.json()
      let assistantResponse = data.output || data.response || data.text || JSON.stringify(data)
      
      // Ensure double newlines for markdown paragraphs
      assistantResponse = assistantResponse.replace(/\\n/g, '\n').replace(/\n(?!\n)/g, '\n\n')

      // Detect raw image URLs and convert them to markdown image syntax
      const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp))(?!\))/gi
      assistantResponse = assistantResponse.replace(imageRegex, (url: string) => `![Image](${url})`)

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantResponse }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input, file)
  }

  return (
    <div className="chatbot-container">
      {isGated && (
        <div className="gate-overlay">
          <form onSubmit={handleGateSubmit} className="gate-form">
            <h2>Welcome!</h2>
            <p>Please provide your details to start chatting with Bryan's resume assistant.</p>
            
            <div className="gate-input-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                id="name"
                type="text" 
                className="gate-input" 
                placeholder="John Doe"
                value={leadData.name}
                onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                required
              />
            </div>

            <div className="gate-input-group">
              <label htmlFor="email">Work Email *</label>
              <input 
                id="email"
                type="email" 
                className="gate-input" 
                placeholder="john@company.com"
                value={leadData.email}
                onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                required
              />
            </div>

            <div className="gate-input-group">
              <label htmlFor="company">Company (Optional)</label>
              <input 
                id="company"
                type="text" 
                className="gate-input" 
                placeholder="Acme Corp"
                value={leadData.company}
                onChange={(e) => setLeadData({...leadData, company: e.target.value})}
              />
            </div>

            {gateError && <div className="gate-error">{gateError}</div>}

            <button type="submit" className="gate-submit">Unlock Chatbot</button>
          </form>
        </div>
      )}

      <div className="messages-area" ref={messagesAreaRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="message-content">
              {msg.role === 'assistant' ? (
                <div className="markdown-content">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeRaw]}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
              {msg.file && (
                <div className="attachment-indicator">
                  📎 {msg.file}
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="message assistant">
            <div className="message-content loading-dots">
              <span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="chat-input-area">
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="chat-input"
            disabled={loading || isGated}
          />
          <label className="file-upload-btn" title="Upload a file">
            📎
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ display: 'none' }}
              disabled={loading || isGated}
            />
          </label>
          <button type="submit" className="send-btn" disabled={loading || isGated || (!input.trim() && !file)}>
            Send
          </button>
        </div>
        {file && (
          <div className="file-preview">
            Selected file: {file.name} 
            <span className="remove-file" onClick={() => setFile(null)}>✕</span>
          </div>
        )}
      </form>
    </div>
  )
}
