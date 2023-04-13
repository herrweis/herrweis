import { getColorPair } from "./getColors"


export default function setBodyColors() {

    let [colorA, colorB] = getColorPair();
    
    document.documentElement.style.setProperty('--bodyColor', colorA);
    document.documentElement.style.setProperty('--backgroundColor', colorB);
}