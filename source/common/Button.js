import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Button({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress ? onPress : ()=>{}}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0060df'
    },
    title: {
        color: "#fff",
    }
});