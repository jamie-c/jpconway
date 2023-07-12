import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Header = () => {
    return (
        <header className="w-100">
            <div className="px-7 flex flex-row items-center justify-between max-w-7xl h-16 m-auto ">
                <Logo txtSize="text-2xl" bold={true} />
                <NavLinks />
            </div>
        </header>
    )
}

export default Header;
