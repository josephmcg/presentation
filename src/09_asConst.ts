const routes = {
  home: '/home',
  login: '/login',
  download: '/download',
  // signup: '/signup',
} as const

const transitions = {
  fade: 'fade',
  slideUp: 'slide-up',
} as const

type Route = (typeof routes)[keyof typeof routes]
type Transition = (typeof transitions)[keyof typeof transitions]

const routeTransitionMap: Record<Route, Transition> = {
  [routes.home]: transitions.fade,
  [routes.login]: transitions.slideUp,
  [routes.download]: transitions.fade,
}

function getTransition(route: Route): Transition {
  return routeTransitionMap[route]
}

const homeTransition = getTransition(routes.home)
