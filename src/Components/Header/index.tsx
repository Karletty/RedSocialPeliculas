import { FC } from "react";
import { Navigation } from "../Nav";

type Props = {
    hideNav?: boolean
}

const Header: FC<Props> = ({ hideNav }) => {
    return (
        <header className="header">
            <Navigation hideNav={hideNav}></Navigation>
        </header>
    );
}

export { Header }