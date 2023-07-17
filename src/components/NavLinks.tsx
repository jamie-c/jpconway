import NavItem from "./NavItem"

const mainNavItems = [['About', '/about'], ['Posts', '/posts'], ['Skills', '/skills'], ['Portfolio', '/portfolio']]

const NavLinksHorizontal = () => {

    return (
        <span>
            <nav className="flex-10 flex flex-row justify-end gap-4 text-xl text-tricornBlack-500 dark:text-pureWhite-200">
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
            <nav className="flex flex-col justify-start items-end gap-8 text-5xl text-tricornBlack-500 dark:text-pureWhite-200 pt-10 pr-8">
                {mainNavItems.map(([ title, url ]) => (
                    <NavItem key={title} title={title} url={url} />
                ))}
            </nav>
        </span>
    )
}

export default NavLinksHorizontal