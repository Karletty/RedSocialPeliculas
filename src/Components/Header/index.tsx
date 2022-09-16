import { FC } from "react";
import { Navigation } from "../Nav";

type Props = {
    hideNav?: boolean
}

const Header: FC<Props> = ({ hideNav }) => {
    return (
        <header className="header">
            {!hideNav && <Navigation></Navigation>}
        </header>
    );
}

export { Header }