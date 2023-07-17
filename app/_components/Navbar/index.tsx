
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="w-full border-b border-black py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-black rounded-full text-white flex items-center justify-center">
                    <h1 className="text-3xl font-black -tracking-widest p-0 m-0">P</h1>
                </div>
                <p className="text-2xl font-extrabold text-black tracking-wide">Payfast</p>
            </div>
            
            <div className="flex items-center gap-16 ">
                <Link href='#' className="uppercase font-sans text-sm text-black">Home</Link>
                <Link href='#' className="uppercase font-sans text-sm text-gray-500">Why immihub?</Link>
                <Link href='#' className="uppercase font-sans text-sm text-gray-500">Features</Link>
                <Link href='#' className="uppercase font-sans text-sm text-gray-500">Faqs</Link>
                <Link href='#' className="uppercase font-sans text-sm text-gray-500">Contact</Link>
            </div>
            <button className="bg-gray-900 text-white px-6 py-2 rounded shadow drop-shadow">
                Download
            </button>
        </div>
    )
}