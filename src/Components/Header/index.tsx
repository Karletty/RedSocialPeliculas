import { FC } from "react";
import { Navigation } from "../Nav";
import Navbar from "react-bootstrap/Navbar";

type Props = {
    hideNav?: boolean
}

const Header: FC<Props> = ({ hideNav }) => {
    return (
        <header className="header">
            <Navbar>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="./logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    <h1>Kpelis</h1>
                </Navbar.Brand>
                {!hideNav &&
                    <Navigation></Navigation>}
            </Navbar>
        </header>
    );
}

export { Header }