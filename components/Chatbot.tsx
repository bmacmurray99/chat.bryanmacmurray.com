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

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! Chat with me to ask questions about Bryan MacMurray\'s experience or to schedule an appointment.' }
  ])
  const [input, setInput] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [sessionId] = useState(() => Math.random().toString(36).substring(7))

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      const assistantResponse = data.output || data.response || data.text || JSON.stringify(data)
      
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
      <div className="messages-area">
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
            disabled={loading}
          />
          <label className="file-upload-btn" title="Upload a file">
            📎
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ display: 'none' }}
              disabled={loading}
            />
          </label>
          <button type="submit" className="send-btn" disabled={loading || (!input.trim() && !file)}>
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
