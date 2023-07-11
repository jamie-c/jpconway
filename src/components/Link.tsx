const Link = (props) => {

    const {url, title, ...rest} = props;  // destructure props to pull url and title, pass remaining props to rest

     if (url.startsWith('http://') || url.startsWith('https://')) {  // if external url add rel and target to rest
        const relVal = (rest.rel ? rest.rel : '');  // if rel value exists, store that value in a variable
        rest.rel = `noopener noreferrer ${relVal}`;  // add noopener noreferrer to rel
        rest.target = '_blank';  // set target
     } 
    
    return (
        <a 
            className={`text-primary-link-color hover:text-primary-link-hover-color border-b-2 border-primary-link-color hover:border-primary-link-hover-color`}
            href={url}
            {...rest}
        >
            {title}
        </a>
    );
}

export default Link;