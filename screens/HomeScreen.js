import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
}, []); 

  return (
    <SafeAreaView className="bg-white">
        
        {/* appBar */}
        <View  className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri:"https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI",
                    }}
                    className="h-7 w-7 bg-grey-300 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-xs text-gray-400">Deliver now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="00CCBB" fill="#00CCBB"/>
                </Text>
            </View>
                <UserIcon size={35} color="#00CCBB"/>
            </View>
                {/* search */}
            <View className="flex-row space-x-2 items-center pb-2 mx-4">
            <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded">
                <MagnifyingGlassIcon color="gray" size={20}/>
                <TextInput
                placeholder="Restaurants & Cuisines"
                keyboardType="default"
                />
            </View>
                <AdjustmentsVerticalIcon color="#00CCBB"/>
            </View> 
            {/* Body */}
            <ScrollView className="bg-gray-100"
            contentContainerStyle={{paddingBottom: 100}}>
            {/* Categories */}
            <Categories/>
            {/* Featured Rows */}
            <FeaturedRow id="0" title="Featured" description="Paid placements from our partners"/>
            <FeaturedRow id="1" title="Tasty Discounts" description="Everyone've been enjoying these juicy discounts"/>
            <FeaturedRow id="2" title="Offers Near you!" description="Why not support your local restaurants"/>
            </ScrollView>
    </SafeAreaView>
    );
};

export default HomeScreen