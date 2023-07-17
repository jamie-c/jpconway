import { NextPage } from "next";

type Props = {
    title: string,
}

const HeadingOne: NextPage<Props> = ({ title } ) => {
    return <h1 
                className="capitalize font-semibold text-5xl text-tricornBlack-500 dark:text-pureWhite-200 mt-16 mb-8" 
            >
                {title}
            </h1>
};

export default HeadingOne;