import React from 'react'
import GoogleAnalytics from 'react-ga'

GoogleAnalytics.initialize('UA-29038123-1')

const withTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({ page })
    GoogleAnalytics.pageview(page)
  }

  const HOC = (props) => {
    const page = props.location.pathname + props.location.search
    trackPage(page)

    return (
      <WrappedComponent {...props} />
    )
  }
  return HOC
}

export default withTracker