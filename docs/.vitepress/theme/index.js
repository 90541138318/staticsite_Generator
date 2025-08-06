import DefaultTheme from 'vitepress/theme'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Articles from './pages/Articles.vue'
import Tutorials from './pages/Tutorials.vue'
import Contact from './pages/Contact.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('About', About)
    app.component('Articles', Articles)
    app.component('Tutorials', Tutorials)
    app.component('Contact', Contact)
  }
}
