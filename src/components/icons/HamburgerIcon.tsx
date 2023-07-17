import { NextPage } from "next"
import { NavLinksVertical } from "../NavLinks"

type Props = {
    active: string,
}

const HamburgerIcon:NextPage<Props> = ({ active }) => {

    const display = active === 'active' ? 'fixed' : 'hidden'

    return (
        <>
            <svg className={`ham hamRotate ${active}`} viewBox="0 0 100 100" width="50" >
                <path
                    className="line top stroke-tricornBlack-500 dark:stroke-pureWhite-200"
                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                <path
                    className="line middle stroke-tricornBlack-500 dark:stroke-pureWhite-200"
                    d="m 70,50 h -40" />
                <path
                    className="line bottom stroke-tricornBlack-500 dark:stroke-pureWhite-200"
                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
            </svg>
            <div className={`${display} top-16 right-0 w-screen h-screen z-50`}>
                <NavLinksVertical />
            </div>
        </>
    )
}

export default HamburgerIcon