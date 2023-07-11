import Link from "next/link";

const NavItem = props => {
    return <Link 
                className="capitalize font-semibold 
                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#51AE8A] hover:to-[#8A51AE]" 
                href="{props.url}"
            >
                {props.title}
            </Link>
};

export default NavItem;