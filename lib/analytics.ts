import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import googleTagManager from '@analytics/google-tag-manager'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const analytics = Analytics({
  app: 'chat-bryanmacmurray-com',
  plugins: [
    ...(GA_MEASUREMENT_ID ? [
      googleAnalytics({
        measurementIds: [GA_MEASUREMENT_ID],
      })
    ] : []),
    ...(GTM_ID ? [
      googleTagManager({
        containerId: GTM_ID,
      })
    ] : []),
  ],
})

export default analytics
