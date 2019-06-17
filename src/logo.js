import * as React from 'react'
import { Frame } from "framer"

export default function Logo(props) {
    const animation = {
        scale: 2,
        rotate: 360,
        opacity: 1
    }

    const transition = {
        delay: props.delay,
        yoyo: 2, 
        duration: 4 - props.delay
    }
    
    return (
        <Frame 
            center
            size={props.size}
            initial={{ scale: 0, opacity: 0}}
            animate={animation}
            transition={transition}
            radius={40}
            backgroundColor={"transparent"}
            border="2px solid #9013FE"

        />
    )
}
