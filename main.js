import './reset.css'
import './styles.scss'
import { gsap } from "gsap";

document.querySelector('#home').innerHTML = `
  <div class="container">
    <div class="bloc-hidden">
      <h1>Starter Vite & Gsap</h1>
    </div>
    <div class="bloc-hidden">
      <h2>Support scss & pwa</h2>
    </div>
    <div class="bloc-hidden">
      <h3>Vite v2.9.9 & Node v17.4.0</h3>
    </div>
  </div>
`

const TLINTRO = gsap.timeline({
  default: {
    duration: 0,
    ease: 'power2.out'
  }
})
TLINTRO
  .to('.bloc-hidden h1', { y: 0, delay: 0.3, duration: 0.7 })
  .to('.bloc-hidden h2', { y: 0, delay: 0.4, duration: 0.7 },'-=0.5')
  .to('.bloc-hidden h3', { y: 0, delay: 0.4, duration: 0.7 },'-=0.7')
