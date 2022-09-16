import React from "react";
import { ActivityIndicator, FlatList, useWindowDimensions, View } from "react-native";
import Post from "../components/Post/Post";

const Home = ({posts, isLoadingAdditionalPosts, fetchMorePosts}) => {
    const {height, width} = useWindowDimensions()

    return (
        <View style={width > 480 ? {flex: 1, alignItems: 'center'} : {}}>
            {width > 480 ? 
                <FlatList
                numColumns={2}
                key={'two'}
                data={posts}
                renderItem={({item}) => (
                    <Post w={width} h={height} post={item}/>
                )}
                keyExtractor={item => item.id}
                onEndReached={fetchMorePosts}
                onEndReachedThreshold={0.7}
            />
        :
            <FlatList
                numColumns={1}
                key={'one'}
                data={posts}
                renderItem={({item}) => (
                    <Post w={width} h={height} post={item}/>
                )}
                keyExtractor={item => item.id}
                onEndReached={fetchMorePosts}
                onEndReachedThreshold={0.7}
            />
        }
            {isLoadingAdditionalPosts && <ActivityIndicator/>}
        </View>
    )
}

export default Home