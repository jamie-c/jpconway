import FooterLinks from "./FooterLinks"

const Footer = () => {
    return (
        <footer className="bg-tricornBlack-500 dark:bg-tricornBlack-500 text-pureWhite-200 py-10 w-100">
            <span>
                <div className="flex flex-col font-medium px-8 md:px-24 lg:px-48 max-w-7xl m-auto">
                    <FooterLinks />
                </div>
            </span>
        </footer>
    )
}

export default Footer