enum Routes {
  Home = '/home',
  Login = '/login',
  Download = '/download',
}

enum Transitions {
  Fade = 'fade',
  SlideUp = 'slide-up',
}

const routeTransitionMap: Record<Routes, Transitions> = {
  [Routes.Home]: Transitions.Fade,
  [Routes.Login]: Transitions.SlideUp,
  [Routes.Download]: Transitions.Fade,
}

function getTransition(route: Routes): Transitions {
  return routeTransitionMap[route]
}

const homeTransition = getTransition(Routes.Home)

// some developers are (rightfully) concerned with enums, since they do not exist in JS
// at runtime, they are just objects
