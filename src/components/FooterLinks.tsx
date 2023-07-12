import FooterLink from "./FooterLink";

const FooterLinks = () => {
    const footerMainLinks = [
        ['Github', 'https://github.com/jamie-c'], 
        ['LinkedIn', 'https://www.linkedin.com/in/jamieconway']
    ];

    return (
        <div>
            <h2 className="text-2xl">Jamie Conway</h2>
            {footerMainLinks.map(footerMainLink => {
                let [title, url] = footerMainLink;
                return (<FooterLink key={title} title={title} url={url} />);
            })}
        </div>
    );
};

export default FooterLinks;
