"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function SearchBar({ searchContent }: { searchContent: [] }) {

    const [ searchTerm, setSearchTerm ] = useState("")
    const [ searchResults, setSearchResults ] = useState([])
    const [ isExpanded, setIsExpanded ] = useState(false)

    const defaultUlClassName = "max-h-0 min-h-0 p-0 m-0"
    const expandedUlClassName = "max-h-96 min-h-fit"
    const backgroundColors = "hover:text-pureWhite-200 hover:bg-tricornBlack-500 dark:hover:text-tricornBlack-500 dark:hover:bg-pureWhite-200"

    useEffect(() => {
        const results = searchContent.filter((post: any) => {
            return  post.title.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setSearchResults(results)
    }, [searchTerm])

    return (
            <div className="w-full border-2 border-solid border-tricornBlack-500
            dark:border-pureWhite-200 rounded-md overflow-hidden">
            <div 
                className={"flex content-start w-full text-left"
                    + " cursor-pointer " + backgroundColors}
            >
                <input
                    className="w-full h-10 bg-transparent text-left pl-4 leading-10 rounded-t-md placeholder:uppercase text-tricornBlack-500 dark:text-pureWhite-200 hover:text-pureWhite-200 hover:dark:text-tricornBlack-500 border-transparent active:border-transparent focus:border-transparent" 
                    type="text" 
                    placeholder="Search Posts"  
                    value={searchTerm}
                    onChange={(e) => {
                        setIsExpanded(true)
                        setSearchTerm(e.target.value)
                        if (e.target.value === "") {
                            setIsExpanded(false)
                        }
                    }
                    }
                />
            </div>
            <ul 
                className={
                    `${isExpanded ? expandedUlClassName : 
                    defaultUlClassName}` + 
                    "overflow-hidden transition-all duration-300 list-none"
                }
            >
                {searchResults.map((post: any) => {
                    return (
                        <div key={post.id}
                            className="text-left leading-10 w-full"
                        >
                            <Link 
                                className={
                                "block uppercase h-8 text-left leading-8"
                                + " tracking-wide transition-colors duration-500"
                                + " indent-2 pl-6 "
                                + backgroundColors
                                }
                                href={`/posts/${post.id}`}
                            >
                                {post.title}
                            </Link>
                        </div>
                    )
                }
                )}
            </ul>
        </div>
    )
}