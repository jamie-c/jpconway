import NavItem from "./NavItem";

const NavLinks = () => {
    const mainNavItems = ['About', 'Posts', 'Skills', 'Links'];
    return (
    <span>
        <nav className="flex-10 flex flex-row justify-end gap-4 text-xl mr-4 text-[#2F2F30]">
            {mainNavItems.map(mainNavItem => (
                <NavItem key={mainNavItem} title={mainNavItem} />
            ))}
        </nav>
    </span>
    );
};

export default NavLinks;