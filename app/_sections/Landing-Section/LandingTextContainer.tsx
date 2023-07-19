'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"


export const LandingTextContainer = ({ children } : { children : JSX.Element | JSX.Element[]}) => {

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
            ref.current?.classList.add('faderight')
        }else {
            ref.current?.classList.remove('faderight')
        }
    }, [isIntersecting])

    return (
        <section ref={ref} className="col-span-8 md:col-span-4 lg:col-span-3 invisible">
            {children}
        </section>
    )
}