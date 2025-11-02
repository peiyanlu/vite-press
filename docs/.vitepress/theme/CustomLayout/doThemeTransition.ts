export const doThemeTransition = async (location: { x: number; y: number }, toggleFn: () => void, isDark: boolean) => {
  const style = document.createElement('style')
  style.innerHTML = `
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation: none;
      mix-blend-mode: normal;
    }
    
    ::view-transition-old(root),
    .dark::view-transition-new(root) {
      z-index: 1;
    }
    
    ::view-transition-new(root),
    .dark::view-transition-old(root) {
      z-index: 9999;
    }
  `
  document.head.appendChild(style)
  
  
  const enableTransitions = () => 'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  
  if (!enableTransitions()) {
    toggleFn()
    return
  }
  
  const transition = document.startViewTransition(async () => {
    toggleFn()
    await Promise.resolve()
  })
  await transition.ready
  
  
  const { x, y } = location
  const maxRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const clipPath = [
    `circle(0px at ${ x }px ${ y }px)`,
    `circle(${ maxRadius }px at ${ x }px ${ y }px)`,
  ]
  document.documentElement.animate(
    {
      clipPath: isDark ? clipPath.reverse() : clipPath,
    },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${ isDark ? 'old' : 'new' }(root)`,
    },
  )
}

