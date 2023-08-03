import { NextPage } from "next";
import Link from "next/link";

type Props = {
    title: string,
    url: string
}

const StyledLink: NextPage<Props> = ({ url, title }) => {
    const linkStyle = 'text-brightBlue-500 hover:text-darkBlue-600 border-b-2 border-brightBlue-500 hover:border-darkBlue-600'

     if (url.startsWith('http://') || url.startsWith('https://')) {  // if external url add rel and target to rest
        return (
            <a 
                className={linkStyle}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
            >
                {title}
            </a>
        )
     } else {
        return (
            <Link
                href={url}
                className={linkStyle}
            >
                {title}
            </Link>

        )
     }
    
    
}

export default StyledLink