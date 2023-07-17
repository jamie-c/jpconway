import { NextPage } from "next"
import Link from "next/link"

type Props = {
    title: string,
    url: string
}

const FooterLink: NextPage<Props> = ({ title, url }) => {

    if (url.startsWith('http://') || url.startsWith('https://')) {  // if external url add rel and target to rest
        return (
            <p className="mt-6">Find me on <a 
                    className="text-pureWhite-200 border-b-2 border-b-pureWhite-200 hover:border-b-0" 
                    href={url}
                    rel='noopener noreferrer'
                    target="_blank"
                > 
                        {title}

                </a>.
            </p>
        )
    } else {
        return (
            <p className="mt-6">Find me on <Link 
                    className="text-pureWhite-200 border-b-2 border-b-pureWhite-200 hover:border-b-0" 
                    href={url}
                > 
                        {title}
                </Link>.
            </p>
        )
    }

}

export default FooterLink