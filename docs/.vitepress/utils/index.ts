export const getColor = (theme: 'light' | 'neutral' | 'dark' = 'neutral') => {
  let range: [ number, number ]
  let alphaRange: [ number, number ]
  switch (theme) {
    case 'dark':
      range = [ 20, 100 ]
      alphaRange = [ .2, .5 ]
      break
    case 'neutral':
      range = [ 80, 195 ]
      alphaRange = [ .3, .6 ]
      break
    case 'light':
    default:
      range = [ 175, 255 ]
      alphaRange = [ .4, .8 ]
      break
  }
  
  const random = ([ min, max ]: [ number, number ]) => Math.random() * (max - min) + min
  
  const r = () => Math.floor(random(range))
  const a = () => random(alphaRange).toFixed(2)
  
  return `rgba(${ r() }, ${ r() }, ${ r() }, ${ a() })`
}
