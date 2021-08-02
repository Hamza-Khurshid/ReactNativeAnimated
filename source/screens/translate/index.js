import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default function Translate() {
    const [animationX] = useState(new Animated.Value(1));
    const [animationY] = useState(new Animated.Value(1));

    const animatedStyleX = {
        transform: [
            {
                translateX: animationX
            },
        ]
    }

    const animatedStyleY = {
        transform: [
            {
                translateX: animationY,
            },
            {
                translateY: animationY,
            },
        ]
    }

    const startAnimationX = () => {
        Animated.timing(animationX, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(animationX, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start();
        });
    }

    const startAnimationY = () => {
        Animated.timing(animationY, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(animationY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start();
        });
    }

    return (
        <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={startAnimationX}>
                <Animated.View style={[styles.box, animatedStyleX]} />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={startAnimationY}>
                <Animated.View style={[styles.box, styles.mt, animatedStyleY]} />
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
    },
    mt: {
        marginTop: 10
    }
})