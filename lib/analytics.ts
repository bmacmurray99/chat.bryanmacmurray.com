import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const analytics = Analytics({
  app: 'chat-bryanmacmurray-com',
  plugins: [
    ...(GTM_ID ? [
      googleTagManager({
        containerId: GTM_ID,
      })
    ] : []),
  ],
})

export default analytics
