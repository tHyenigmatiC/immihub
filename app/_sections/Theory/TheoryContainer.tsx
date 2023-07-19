'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * 
 *  @Question Why have i used this pattern ?
 *  @Ans  This is client side component as I am using useState Hook.
 *        Also I have notified it being client component by using 'use client' directive at top
 *        I don't want to make the whole component client side
 *        This is the recommended pattern for nextjs
 *        Now whatever component is passed as children that will be the server component
 *        as our client component doesn't have any info about the children
 */ 

export const TheoryContainer = ({ children} : { children: JSX.Element | JSX.Element[]}) => {

    const [isIntersecting, setIsInterSecting] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInterSecting(entry.isIntersecting)
            },
            {
                rootMargin: '-100px'
            }
        );
        observer.observe(ref.current as Element)
        // cleanup function
        return () => observer.disconnect()
    }, [])


    useLayoutEffect(() => {
        if(isIntersecting){
            ref.current?.classList.add('faderight')
        }else{
            ref.current?.classList.remove('faderight')
        }
    }, [isIntersecting])

    return (
        <div id="why-immihub" ref={ref} className="invisible grid grid-flow-row grid-cols-4 w-full my-5 py-5 md:my-28 gap-y-4 gap-x-4 md:gap-x-8">
            {children}
        </div>
    )
}