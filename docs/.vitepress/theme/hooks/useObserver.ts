export default function useObserver() {
  if (!globalThis.IntersectionObserver) return undefined
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImg = entry.target as HTMLImageElement
        const src = lazyImg.dataset.src
        if (src) {
          lazyImg.src = src
          lazyImg.removeAttribute('data-src')
        }
        observer.unobserve(lazyImg)
      }
    })
  })
  
  return observer
}
