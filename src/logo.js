import * as React from 'react'
import { Frame } from "framer"

export default function Logo(props) {
    const animation = {
        scale: 1.4,
        rotate: 360,
        opacity: 1
    }

    const transition = {
        delay: props.delay,
        yoyo: 1, 
        duration: 4  - props.delay
    }
    
    return (
        <Frame 
            center
            size={props.size}
            initial={{ scale: 0, opacity: 0}}
            animate={animation}
            transition={transition}
            radius={30}
            backgroundColor={"transparent"}
            border="2px solid #9013FE"

        />
    )
}
