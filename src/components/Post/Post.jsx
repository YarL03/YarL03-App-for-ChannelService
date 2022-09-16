import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const Block = styled.View`
margin-bottom: 15px;
`

const PostItem = styled.View`
border-width: 3;
border-color: #27569C;
border-radius: 6;
margin: 10px 10px 5px;
padding: 10px;
`

const TextStyled = styled.Text`
font-size: 16px;
font-weight: bold;
`

const TextTitle = styled.Text`
font-size: 16px;
font-weight: bold;
max-height: 77px;
`

const TextBody = styled.Text`
font-size: 16px;
font-weight: bold;
`

const truncateStr = (str, n) => {
    return str.length >= n ? str.substring(0, n) + '...'
    : str
}

const Post = ({w, h, post}) => {
    return (
        <PostItem style={{height: w > 480 ? 470 : 200, width: w > 480 ? w/2.4 : 'auto'}}>
            {w > 480 && <Block>
                <Image style={{height: 150, width: 150}} source={{
                    uri: post.photoURL + '.png' // без указания формата ничего не работало
                    }}/>
            </Block> }
            <Block>
                <TextStyled>Author: {post.name}</TextStyled>
            </Block>
            <Block>
                <TextStyled>Company: {post.company}</TextStyled>
            </Block>
            <Block>
                <TextTitle >Title: {truncateStr(post.title, 80)}</TextTitle>
            </Block>
            {w > 480 && <Block>
                <TextBody>{truncateStr(post.body, 150)}</TextBody>
            </Block>}
        </PostItem>
    )
}

export default Post