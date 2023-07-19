'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const FooterContentContainer = ({ children } : { children : JSX.Element | JSX.Element[] }) => {

    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            {
                rootMargin: '-100px'
            }
        )
        observer.observe(ref.current as HTMLDivElement)
        return () => observer.disconnect()
    }, [])


    useLayoutEffect(() => {
        if(isIntersecting){
            ref.current?.classList.add('footertextfadeup')
        }else{
            ref.current?.classList.remove('footertextfadeup')
        }
    },[isIntersecting])

    return (
        <div ref={ref} className="invisible">
            {children}
        </div>
    )
}