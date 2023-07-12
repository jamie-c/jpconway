import NavItem from "./NavItem"

const mainNavItems = [['About', '/about'], ['Posts', '/posts'], ['Skills', '/skills'], ['Links', '/links']]

const NavLinksHorizontal = () => {

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

export const NavLinksVertical = () => {

    return (
        <span>
            <nav className="flex flex-col justify-start items-end gap-8 text-5xl text-[#2f2f30] pt-10 pr-8">
                {mainNavItems.map(([ title, url ]) => (
                    <NavItem key={title} title={title} url={url} />
                ))}
            </nav>
        </span>
    )
}

export default NavLinksHorizontal