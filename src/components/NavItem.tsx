import Link from "next/link";
import { NextPage } from "next";

type Props = {
    title: string,
    url: string
}

const NavItem: NextPage<Props> = ({ title, url } ) => {
    return <Link 
                className="capitalize font-semibold 
                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#51AE8A] hover:to-[#8A51AE]" 
                href={url}
            >
                {title}
            </Link>
};

export default NavItem;