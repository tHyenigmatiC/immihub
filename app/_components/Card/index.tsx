/* eslint-disable react/display-name */

type CardProps = {
    width?: string
    bgcolor?: string
    borderRadius?: string
    children: JSX.Element | JSX.Element[]
}

type CardImageProps = CardProps

type CardContentProps = {
    color?: string
    children: JSX.Element | JSX.Element[]
}


export const Card = ({ bgcolor, children, width, borderRadius = 'rounded' }: CardProps) => (
    <div className={`border rounded font-sans border-black pr-1 pb-1 bg-black ${borderRadius} ${width}`}>
        <div className={`border rounded font-sans -ml-2 -mt-2 border-black py-4 px-4 md:px-6 h-full ${borderRadius} ${bgcolor}`}>
            {children}
        </div>
    </div>
)

Card.Image = ( {bgcolor, children}: CardImageProps) => (
    <div className={"w-8 h-8 rounded-full relative flex items-center justify-center "+bgcolor}>{children}</div>
)

Card.ImageWithText = ({ children } : CardImageProps) => (
    <div className="flex flex-row items-center gap-4">
        {children}
    </div>
)

Card.Text = ({ children } :CardContentProps) => (
    <div className="text-sm md:text-base text-gray-900 capitalize font-medium">{children}</div>
)

Card.Content = ({ color, children }: CardContentProps) => (
    <div className={"flex flex-col items-start justify-between gap-2 mt-4 text-sm md:text-xs w-full md:w-11/12 "+color}>
        {children}
    </div>
)

Card.More = ({ color, children } : CardContentProps) => (
    <div className={"text-xs text-blue-600 font-medium my-4 "+color}>
        {children}
    </div>
)