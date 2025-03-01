import { useState, useEffect } from "react"

export const WindowResize = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            const size = document.body.clientWidth;
            setWidth(size);
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);

    })

    return (
        <>
            <h2>Window resize</h2>
            <span> The page width {width}</span>
        </>
    )
}