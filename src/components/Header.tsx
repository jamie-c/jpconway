import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between w-screen h-16 bg-pure-white">
            <Logo />
            <NavLinks />
        </header>
    )
}

export default Header;
