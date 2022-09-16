import React from "react";
import styled from "styled-components/native";
import { Image, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../utils/selectors";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";


const TopBar = styled.View`
    height: 100px;
    width: 100%;
    background: #E4B062;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    flex-direction: row;
`

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    
    const onSignOut = () => isAuth && dispatch(AuthActionCreators.signOut())
    

    return (
        <TopBar>
                <Image style={{width: 70, height: 63}} source={require('../../../assets/logo1.png')}/>
                <Pressable onPress={onSignOut}>
                    <Image style={{width: 60, height: 56}} source={require('../../../assets/logout.png')}/>
                </Pressable>
        </TopBar>
    )
}

export default Header