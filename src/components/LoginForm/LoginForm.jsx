import React from "react";
import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator, useWindowDimensions } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { rules } from "../../utils/rules";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { selectErrorinAuth, selectIsLoadingInAuth } from "../../utils/selectors";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import Error from "../../UI/Error";

const LoginFormStyled = styled.View`
height: 333;
border-width: 3;
border-color: #27569C;
padding: 10px;
border-radius: 6px;
justify-content: center;
`
const FormItem = styled.View`
flex-direction: row;
flex-wrap: wrap;
margin-bottom: 10px;
`
const Label = styled.Text`
justify-content: center;
font-size: 16px;
width: 95px;
`
const Form = styled.View`
padding: 20px;
`

const Input = styled.TextInput`
width: 100%;
border-width: 1;
border-color: #27569C;
border-radius: 5;
padding-horizontal: 10;
margin-vertical: 5;
height: 39px;
`

const ButtonCont = styled.View`
margin-top: 10px;
width: 200px;
`


const LoginForm = () => {
    const {control, handleSubmit, resetField, formState: {errors}} = useForm()
    const isLoading = useSelector(selectIsLoadingInAuth)
    const error = useSelector(selectErrorinAuth)
    const dispatch = useDispatch()
    const {height, width} = useWindowDimensions()


    if (errors.login || errors.password) dispatch(AuthActionCreators.setError(''))

    const onSubmit = (data) => {
        dispatch(AuthActionCreators.signIn(data))
        resetField('login')
        resetField('password')
    }

    return (
        <LoginFormStyled style={width > 480 ? {width: 470} : {}}>
            <Text style={{position: 'absolute', top: 0, width: '100%', textAlign: 'center', fontSize: 20, color: '#27569C'}}>Authorization</Text>
            <Form>
                <FormItem style={width > 480 ? styles.tabletFormItem : {}}>
                    <View>
                        <Label>login</Label>
                    </View>
                        

                    <Controller
                        name="login"
                        rules={
                            rules.required()
                        }
                        control={control}
                        render={({field: {onChange, value, onBlur}}) => (
                            <TextInput style={styles.input}
                                onChangeText={onChange}
                                value={value}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    
                    
                </FormItem>
                {errors.login && <Error w={width} h={height} text={'This is required.'}/>}

                <FormItem style={width > 480 ? styles.tabletFormItem : {}}>
                    <View>
                        <Label>password</Label>
                    </View>
                    <Controller
                        name="password"
                        rules={
                            rules.required()
                        }
                        control={control}
                        render={({field: {onChange, value, onBlur}}) => (
                            <TextInput style={styles.input}
                                onChangeText={onChange}
                                value={value}
                                onBlur={onBlur}
                                secureTextEntry={true}
                            />
                        )}
                    />
                </FormItem>
                {error && <Error w={width} h={height} text={error}/>}
                {errors.password && <Error w={width} h={height} text={'This is required.'}/>}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ButtonCont>
                        <Button
                            
                            onPress={handleSubmit(onSubmit)}
                            title="Submit"
                            color="#E4B062"
                            disabled={isLoading}
                        
                        />
                    </ButtonCont>
                </View>
            </Form>
            {isLoading && <ActivityIndicator style={{ position: 'absolute', bottom: 20, width: '100%', textAlign: 'center'}}/>}
        </LoginFormStyled>
    )
}

const styles = StyleSheet.create({
    tabletFormItem: {
        flexWrap: 'nowrap',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#27569C',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        height: 39,
    }
})

export default LoginForm