import { NextPage } from "next";
import Link from "next/link";

type Props = {
    title: string,
    url: string
}

const StyledLink: NextPage<Props> = ({ url, title }) => {
    const linkStyle = 'text-[#3a86ff] hover:text-[#0767FF] border-b-2 border-[#3a86ff] hover:border-[#0767FF]'

     if (url.startsWith('http://') || url.startsWith('https://')) {  // if external url add rel and target to rest
        return (
            <a 
                className={linkStyle}
                href={url}
                rel="noopener noreferrer"
                target="blank"
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