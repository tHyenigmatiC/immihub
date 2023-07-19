import Image from "next/image"
import AppleIcon from '@app/_assets/icons/apple.svg'


export const AppStoreButton = () => (
    <button className="bg-black shadow-md text-xs text-white rounded-md py-1 px-4 flex items-center gap-2">
        <Image 
            src={AppleIcon}
            alt='play store icon'
            height={32}
            width={32}
            style={{objectFit: 'contain'}}
        />
        <p className="leading-3">Download on the <br/><span className="font-semibold text-lg">App Store</span></p>
    </button>
)