import React, { useRef } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { HeartIcon, XMarkIcon } from 'react-native-heroicons/solid'


const Cards = (props) => {
    const swipeRef = useRef(null);
    return (
        <>
            <View className='flex-1 -mt-5'>
                <Swiper
                    ref={swipeRef}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    cards={props.data}
                    stackSize={5}
                    cardIndex={0}
                    onSwipedLeft={() => {
                        console.log('rejected');
                    }}
                    onSwipedRight={() => {
                        console.log('matched');
                    }}
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red",
                                },
                            },
                        },
                        right: {
                            title: 'MATCH',
                            style: {
                                label: {
                                    textAlign: "left",
                                    color: "green",
                                },
                            },
                        },
                    }
                    }
                    verticalSwipe={false}
                    animateCardOpacity
                    renderCard={card => card ? (
                        <View key={card.id} className={`${card.color} h-3/4 rounded-xl relative`} />
                    ) : (
                        <View className='relative h-3/4 justify-center items-center rounded-xl bg-red-600' />
                    )} />
            </View>


        </>


    )
}
export default Cards