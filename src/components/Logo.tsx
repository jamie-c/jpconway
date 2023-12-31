import { NextPage } from "next"

type Props = {
    txtSize: string,
    bold: boolean
}

const Logo: NextPage<Props> = ({ txtSize, bold }) => {

    const classNames = 'py-1 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400 dark:from-green-600 dark:to-purple-600 hover:text-tricornBlack-500 dark:hover:text-pureWhite-200'
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