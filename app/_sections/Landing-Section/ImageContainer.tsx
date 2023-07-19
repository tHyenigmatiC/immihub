'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"


export const ImageContainer = ({ children } : { children : JSX.Element | JSX.Element[]}) => {

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
            ref.current?.classList.add('fadeleft')
        }else {
            ref.current?.classList.remove('fadeleft')
        }
    }, [isIntersecting])

    return (
        <section ref={ref} className="items-start justify-end hidden relative md:flex col-span-4 lg:col-span-5 invisible">
            {children}
        </section>
    )
}