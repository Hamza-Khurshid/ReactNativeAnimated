import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default function Translate() {
    const [animationW] = useState(new Animated.Value(150));
    const [animationH] = useState(new Animated.Value(150));

    const animatedStyleX = {
        width: animationW,
    }

    const animatedStyleY = {
        height: animationH,
    }

    const startAnimationX = () => {
        Animated.timing(animationW, {
            toValue: 250,
            duration: 1500,
            useNativeDriver: false
        }).start();
    }

    const startAnimationY = () => {
        Animated.timing(animationH, {
            toValue: 100,
            duration: 1500,
            useNativeDriver: false
        }).start();
    }

    return (
        <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={startAnimationX}>
                <Animated.View style={[styles.box, animatedStyleX]}>
                    <Text>Some length text goes here just to check if layout changes with animation</Text>
                </Animated.View>
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