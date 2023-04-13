import { getColorPair } from "./getColors"


export default function setBodyColors() {

    if (typeof window === "undefined" || !window.document) {
        console.log(`bailing out of the useeffect. Going to continue to render??`);
        return
    }

    let [colorA, colorB] = getColorPair();

    if (document){
        document.documentElement.style.setProperty('--bodyColor', colorA);
        document.documentElement.style.setProperty('--backgroundColor', colorB);
    }
}