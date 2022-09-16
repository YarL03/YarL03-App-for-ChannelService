import React from "react";
import { useWindowDimensions } from "react-native";
import styled from 'styled-components/native'
import LoginForm from "../components/LoginForm/LoginForm";

const LoginFormWrap = styled.View`
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
top: 10px;
`

const AuthScreen = () => {
    const {heigth, width} = useWindowDimensions()

    return (
        <LoginFormWrap style={width > 480 ? {flex: 1} : {}}>
            <LoginForm/>   
        </LoginFormWrap>
    )
}


export default AuthScreen