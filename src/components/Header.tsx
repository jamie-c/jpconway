import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HamburgerIcon from "./icons/HamburgerIcon";


const Header = () => {
    return (
        <header className="w-100">
            <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto ">
                <Logo txtSize="text-2xl" bold={true} />
                <NavLinks />
                <span className="flex sm:hidden flex-row items-center h-16 justify-center m-0 overflow-hidden absolute w-12 right-4 top-0">
                    <HamburgerIcon />
                </span>
            </div>
        </header>
    )
}

export default Header;
