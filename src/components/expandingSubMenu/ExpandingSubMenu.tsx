"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const ExpandingSubMenu = ({ links }: {links: { [key: string]: string }[]}) => {

    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState(false)

    const defaultUlClassName = "max-h-0 min-h-0 p-0 m-0"
    const expandedUlClassName = "max-h-96 min-h-fit"
    const backgroundColors = "hover:text-pureWhite-200 hover:bg-tricornBlack-500 dark:hover:text-tricornBlack-500 dark:hover:bg-pureWhite-200"

    const toggleSubMenu = () => {
        setIsExpanded(!isExpanded)
    }


    return (
        <div className="w-full border-2 border-solid border-tricornBlack-500
            dark:border-pureWhite-200 rounded-md overflow-hidden">
            <div 
                onClick={toggleSubMenu}
                className={"flex content-start w-full text-left pl-4 leading-10"
                    + " cursor-pointer " + backgroundColors}
            >
                TABLE OF CONTENTS
            </div>
            <ul 
                className={
                    `${isExpanded ? expandedUlClassName : 
                    defaultUlClassName}` + 
                    "overflow-hidden transition-all duration-500 list-none"
                }
            >
                {links.map(({ title }) => (
                    <div key={title} 
                        className="text-left leading-10 w-full">
                        <Link 
                            className={
                                "block uppercase h-8 text-left leading-8"
                                + " tracking-wide transition-colors duration-500"
                                + " indent-2 pl-6 "
                                + backgroundColors
                            }
                            href={`${pathname}/#${title.toLowerCase().replace(/ /g, '-')}`}
                        >
                            {title}
                        </Link>
                    </div>
                ))}
            </ul>   
        </div>
    )
}

export default ExpandingSubMenu