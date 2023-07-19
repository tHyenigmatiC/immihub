/* eslint-disable react/display-name */

type SingleChildProps = {
    children : React.ReactNode
    className?: string
}

type ChildrenProps = {
    children: React.ReactNode | React.ReactNode[]
    className?: string
}

export const Section = ( { children, className = 'px-8 my-10 w-full' } : ChildrenProps) => (
    <section className={className}>
        {children}
    </section>
)

Section.Heading = ( { children , className} : ChildrenProps) => (
    <div className={"flex flex-col items-start gap-6 "+className}>
        {children}
    </div>
)

Section.Subtitle = ( { children , className} : SingleChildProps) => (
    <div className={"uppercase font-semibold text-sm text-gray-500 "+className}>
        {children}
    </div>
)

Section.Title = ( { children , className} : SingleChildProps) => (
    <h2 className={"font-saira-condensed text-4xl leading-[1.3] font-medium text-gray-900 "+className}>
        {children}
    </h2>
)

Section.Body = ( { children , className} : ChildrenProps ) => (
    <div className={'mt-8 '+className}>
        {children}
    </div>
)