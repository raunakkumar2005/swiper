import { View, Text, TouchableWithoutFeedback, Button, Platform, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../components/Cards';
const DATA = [
    {
        id: 1,
        color: "bg-red-400",

    },
    {
        id: 2,
        color: "bg-green-400",


    },
    {
        "id": 3,
        color: "bg-amber-400",

    },
    {
        "id": 4,
        color: "bg-blue-400",

    },
    {
        "id": 5,
        color: "bg-pink-400",

    }
]
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 mt-6'>
            <Cards data={DATA} />

        </SafeAreaView>
    )
}

export default HomeScreen