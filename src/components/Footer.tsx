import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <footer className="bg-[#2F2F30] text-[#fafafa] py-10 w-100">
            <span>
                <div className="flex flex-col font-medium px-8 md:px-24 lg:px-48 max-w-7xl m-auto">
                    <FooterLinks />
                </div>
            </span>
        </footer>
    )
};

export default Footer;