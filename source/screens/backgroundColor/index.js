import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default function BackgroundColor() {
    const [animation] = useState(new Animated.Value(0));

    const animatedStyle = {
        backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
        })
    }

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: false
            }).start();
        });
    }

    return (
        <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
    }
})