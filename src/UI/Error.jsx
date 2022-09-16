import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const ErrorStyled = styled.Text`
color: #bf1650;
margin-bottom: 5px;
`

const Error = ({w, h, text}) => {
    return <View style={w > 480 ? {left: 100, flexDirection: 'row'} : {}}>
            <ErrorStyled>{text}</ErrorStyled>
        </View>
}

export default Error