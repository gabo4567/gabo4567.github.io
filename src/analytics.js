import ReactGA from 'react-ga4'

const MEASUREMENT_ID = 'G-NM0R88QT2K'

let initialized = false

export const initGA = () => {
  if (initialized) return

  ReactGA.initialize(MEASUREMENT_ID)
  initialized = true
}

export const trackPageView = (path) => {
  if (!initialized || !path) return

  ReactGA.send({
    hitType: 'pageview',
    page: path,
  })
}
