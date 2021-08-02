import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default function Scale() {
    const [animation] = useState(new Animated.Value(1));
    const [animationX] = useState(new Animated.Value(1));
    const [animationY] = useState(new Animated.Value(1));

    const animatedStyleX = {
        transform: [
            {
                scaleX: animationX
            },
        ]
    }

    const animatedStyleY = {
        transform: [
            {
                scaleY: animationY,
            },
        ]
    }

    const animatedStyleXY = {
        transform: [
            {
                scale: animation
            },
        ]
    }

    const startAnimationX = () => {
        Animated.timing(animationX, {
            toValue: -2,
            duration: 1500,
            useNativeDriver: true
        }).start();
    }

    const startAnimationY = () => {
        Animated.timing(animationY, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    const startAnimationXY = () => {
        Animated.timing(animation, {
            toValue: 2,
            duration: 1500,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={startAnimationXY}>
                <Animated.View style={[styles.box2, animatedStyleXY]} />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={startAnimationY}>
                <Animated.View style={[styles.box, animatedStyleY]} />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={startAnimationX}>
                <Animated.View style={[styles.box, styles.mt, animatedStyleX]}>
                    <Text>This is just text</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
    },
    box2: {
        width: 50,
        height: 50,
        marginBottom: 10,
        backgroundColor: 'red',
    },
    mt: {
        marginTop: 10
    }
})