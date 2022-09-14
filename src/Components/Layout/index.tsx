import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Children = {
    children: ReactNode
    hideNav?: boolean
}


const Layout:FC<Children> = ({children, hideNav}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
}

export { Layout }