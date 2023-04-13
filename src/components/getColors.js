import randomColor from 'random-hex-color'
import contrast from 'get-contrast'

export const getColorPair = () => {
    const colorA = randomColor()
    let colorB = randomColor()
  
    while (!contrast.isAccessible(colorA, colorB)) {
      colorB = randomColor()
    }
  
    return [colorA, colorB]
}