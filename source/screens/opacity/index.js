import React, { useState } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default function Opacity() {
    const [animation, setAnimation] = useState(new Animated.Value(1));

    const animatedStyle = {
        opacity: animation
    }

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 750,
                useNativeDriver: true
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