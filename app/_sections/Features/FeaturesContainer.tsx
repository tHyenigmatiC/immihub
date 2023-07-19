'use client'

import { Section } from "@app/_components/Section"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const FeaturesContainer = ({ children} : { children: JSX.Element | JSX.Element[]}) => {

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
            ref.current?.classList.add('fliphorizontal')
        }else{
            ref.current?.classList.remove('fliphorizontal')
        }
    }, [isIntersecting])

    return (
        <div id="features" ref={ref} className="invisible w-full my-5 py-5">
            <Section className="my-0 w-auto">
                {children}
            </Section>
        </div>
    )
}