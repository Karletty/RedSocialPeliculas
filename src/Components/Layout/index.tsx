import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Children = {
    children: ReactNode
    showNav?: boolean
}


const Layout:FC<Children> = ({children, showNav}) => {
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