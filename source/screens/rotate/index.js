import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default function Opacity() {
    const [animation] = useState(new Animated.Value(0));

    const rotateInterpolate = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const animatedStyle = {
        transform: [
            {
                rotate: rotateInterpolate
            }
        ],
    }

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 360,
            duration: 1500,
            useNativeDriver: false
        }).start();
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