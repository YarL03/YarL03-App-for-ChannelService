import { useEffect } from "react"
import { useSelector } from "react-redux"
import Layout from "../components/Layout/Layout"
import { selectIsAuth } from "../utils/selectors"

export const Initialization = ({ navigation, children }) => {
    const isAuth = useSelector(selectIsAuth)

    useEffect(() => {

        !isAuth ? navigation.navigate('Auth')
        : navigation.navigate('Home')
    }, [isAuth])


    return <Layout>
        {children}
    </Layout>
}