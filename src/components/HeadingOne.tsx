import { NextPage } from "next";

type Props = {
    title: string,
}

const HeadingOne: NextPage<Props> = ({ title } ) => {
    return <h1 
                className="capitalize font-semibold text-6xl text-[#2F2F30] mt-16 mb-8" 
            >
                {title}
            </h1>
};

export default HeadingOne;