import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import Button from '../common/Button'

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <Button title="Opacity" onPress={()=>navigation.navigate('Opacity')} />
            <Button title="Translate" onPress={()=>navigation.navigate('Translate')} />
            <Button title="Scale" onPress={()=>navigation.navigate('Scale')} />
            <Button title="Width Height" onPress={()=>navigation.navigate('WidthHeight')} />
            <Button title="Background Color" onPress={()=>navigation.navigate('BackgroundColor')} />
            <Button title="Rotate" onPress={()=>navigation.navigate('Rotate')} />
            
            <Button title="" onPress={()=>navigation.navigate('')} />
        </ScrollView>
    )
}
