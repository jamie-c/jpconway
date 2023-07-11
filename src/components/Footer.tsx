import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <footer className="bg-tricorn-black text-pure-white py-10 px-5">
            <span>
                <div className="flex flex-col font-medium">
                    <FooterLinks />
                </div>
            </span>
        </footer>
    )
};

export default Footer;