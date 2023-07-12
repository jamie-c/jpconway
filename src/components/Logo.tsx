import { NextPage } from "next"

type Props = {
    txtSize: string,
    bold: boolean
}

const Logo: NextPage<Props> = ({ txtSize, bold }) => {

    const classNames = 'py-1 bg-clip-text text-transparent bg-gradient-to-r from-[#51AE8A] to-[#8A51AE] hover:text-[#2F2F30]'
    const updatedClassNames = txtSize ? `${txtSize} ${classNames}` : classNames
    const finalClassNames = bold ? `${updatedClassNames} font-extrabold` : updatedClassNames

    return (
    <div>
        <h1 className={finalClassNames}>
            <a 
                href="/"
            >
                Jamie Conway!
            </a>
        </h1>
    </div>
    )
}

export default Logo