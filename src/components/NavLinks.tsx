import NavItem from "./NavItem"

const NavLinks = () => {
    const mainNavItems = [['About', '/about'], ['Posts', '/posts'], ['Skills', '/skills'], ['Links', '/links']]

    return (
        <span>
            <nav className="flex-10 flex flex-row justify-end gap-4 text-xl text-[#2F2F30]">
                {mainNavItems.map(([ title, url ]) => (
                    <NavItem key={title} title={title} url={url} />
                ))}
            </nav>
        </span>
    )
}

export default NavLinks