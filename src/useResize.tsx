import { useState, useEffect } from "react";
import { SCREEN_MD } from "./utils";



export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = (event:Event) => {
            const wind = event.target as Window
            setWidth(wind.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () =>  window.removeEventListener("resize", handleResize)
    }, [])
    
    return {
        isAdaptive:width <= SCREEN_MD
    }

}