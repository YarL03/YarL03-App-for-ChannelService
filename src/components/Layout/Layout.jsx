import React from "react";
import { StatusBar, View } from "react-native";
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <View style={{flex: 1}}>
            <StatusBar/>
            <Header/>
            <View style={{flex: 1}}>
                {children}
            </View>
        </View>
    )
}

export default Layout