import { Layout } from "../../Components"


const Login = () => {
    return(
        <Layout>
            <form action="">
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Contraseña</label>
                <input type="text" />
            </form>
        </Layout>
    )
}

export { Login }