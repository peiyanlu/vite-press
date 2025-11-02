export function createParticleSystem() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    pointerEvents: 'none',
    zIndex: '99999',
  })
  document.body.appendChild(canvas)
  
  let width = window.innerWidth
  let height = window.innerHeight
  canvas.width = width
  canvas.height = height
  
  window.addEventListener('resize', () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  })
  
  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    color: string
    size: number
  }
  
  const particles: Particle[] = []
  
  const getColor = () => {
    const base = Math.random() > .5 ? 180 : 60
    const r = () => Math.floor(base + Math.random() * 75)
    return `rgba(${ r() }, ${ r() }, ${ r() }, 1)`
  }
  
  const spawnParticles = (x: number, y: number, count = 50) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = 1 + Math.random() * 3
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // 轻微上抛
        life: 60 + Math.random() * 20,
        maxLife: 60 + Math.random() * 20,
        color: getColor(),
        size: 2 + Math.random() * 3,
      })
    }
  }
  
  const render = () => {
    ctx.clearRect(0, 0, width, height)
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.x += p.vx
      p.y += p.vy
      p.vy += .0005 // 重力加速度
      p.life--
      
      if (p.life <= 0) {
        particles.splice(i, 1)
        continue
      }
      
      ctx.globalAlpha = p.life / p.maxLife
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
  
  return { spawnParticles }
}


// const spawnParticles = (x: number, y: number, count: number = 50) => {
//   for (let i = 0; i < count; i++) {
//     const particle = document.createElement('div')
//     const length = 4 + Math.random() * 4
//     Object.assign(particle.style, {
//       position: 'fixed',
//       left: `${ x - length * .5 }px`,
//       top: `${ y - length * .5 }px`,
//       width: `${ length }px`,
//       height: `${ length }px`,
//       borderRadius: '50%',
//       pointerEvents: 'none',
//       background: getColor(),
//       zIndex: '99999',
//     })
//     document.body.appendChild(particle)
//
//     const distance = 80 + Math.random() * 40
//     const angle = Math.random() * Math.PI * 2
//     const destX = Math.cos(angle) * distance
//     const destY = Math.sin(angle) * distance
//     particle
//       .animate(
//         [
//           { transform: 'translate(0, 0)', opacity: 1 },
//           { transform: `translate(${ destX }px, ${ destY }px)`, opacity: 0 },
//         ],
//         {
//           easing: 'ease-out',
//           duration: 700 + Math.random() * 300,
//         },
//       )
//       .onfinish = () => particle.remove()
//   }
// }
