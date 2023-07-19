'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"




export const MetricsContainer = ({ children } : { children: JSX.Element | JSX.Element[]}) => {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        // defining intersection observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            {
                rootMargin: '-100px'
            }
        )
        // invoking observer to listen for events
        observer.observe(ref.current as HTMLDivElement)

        // clean up
        return () => observer.disconnect()
    })
    

    useLayoutEffect(() => {
        if(isIntersecting){
            ref.current?.classList.add('fadeleft')
        }else {
            ref.current?.classList.remove('fadeleft')
        }
    }, [isIntersecting])



    return(
        <div ref={ref} className="grid invisible grid-cols-4 gap-4 w-full my-16 md:my-10 text-gray-900">
            {children}
        </div>
    )
}