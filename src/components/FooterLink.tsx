const FooterLink = props => {
    return <p className="mt-6">Find me on <a className="text-pure-white border-b-2 border-b-pure-white hover:border-b-0" href={props.url}>{props.title}</a>.</p>
};

export default FooterLink;