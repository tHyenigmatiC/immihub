'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const AppDemoScreenContainer = ({ children } : { children : JSX.Element | JSX.Element[]}) => {

    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)    
    const previousY = useRef<number>(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(previousY.current > entry.boundingClientRect.y){
                    setIsScrollingDown(true)
                }else{
                    setIsScrollingDown(false)
                }
                previousY.current = entry.boundingClientRect.y;
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
            if(isScrollingDown){
                ref.current?.classList.add('fadeup')
            }else {
                ref.current?.classList.add('fadedown')
            }
        }else {
            if(isScrollingDown){
                ref.current?.classList.remove('fadeup')
            }else {
                ref.current?.classList.remove('fadedown')
            }
        }
    },[isIntersecting, isScrollingDown])

    return (
        <div ref={ref} className="flex invisible items-start justify-center gap-2 lg:gap-14 mt-12 mb-20 md:my-32">
            {children}
        </div>
    )
}