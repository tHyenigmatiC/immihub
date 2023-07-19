'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"


export const FAQsContainer = ({ children } : { children : JSX.Element | JSX.Element[]}) => {

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
            ref.current?.classList.add('fadeuptext')
        }else {
            ref.current?.classList.remove('fadeuptext')
        }
    }, [isIntersecting])

    return (
        <div id="faqs" ref={ref} className="grid invisible grid-cols-5 grid-flow-row gap-8 my-20 w-full py-12">
            {children}
        </div>
    )
}