import React from "react";
import { Text, View } from "react-native";

const Input = styled.TextInput`
width: 100%;
border-width: 1px;
border-color: #e8e8e8;
border-radius: 5;
padding-horizontal: 10;
margin-vertical: 5;
`

export const CustomInput = ({name, value, setValue}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Input
            onChangeText={setValue}
            value={value}
            />
        </View>
    )
}