import { Router } from './router.js'

const router = new Router ()
router.add('/', '/pages/home.html')
router.add('/exploracao', 'pages/exploracao.html')
router.add('/universo', '/pages/universo.html')

router.handle()



window.onpopstate = () => router.handle() & changeBg()
window.route = () => router.route() & changeBg()



function changeBg() {
  const { pathname } = window.location;

  switch (pathname) {
    case '/exploracao':
      document.documentElement.className = 'exploration';
      break;

    case '/universo':
      document.documentElement.className = 'universo';
      break;

    default:
      document.documentElement.className = '';
      break;
  }
}
