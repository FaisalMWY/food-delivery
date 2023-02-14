import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="flex-row mt-4 items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
            {/* restaurant cards */}
            <RestaurantCards
            id={0}
            title='herfy'
            imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"
            genre="American"
            dishes={[]}
            rating={3.5}
            address="Jubail Alfanateer branch"
            shortDescription="A well known restaurant that has dosens of branches across Saudi Arabia"
            lat={324234}
            long={23423234}
            />
            <RestaurantCards
            id={0}
            title='herfy'
            imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"
            genre="American"
            dishes={[]}
            rating={3.5}
            address="Jubail Alfanateer branch"
            shortDescription="A well known restaurant that has dosens of branches across Saudi Arabia"
            lat={324234}
            long={23423234}
            />
            <RestaurantCards
            id={0}
            title='herfy'
            imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"
            genre="American"
            dishes={[]}
            rating={3.5}
            address="Jubail Alfanateer branch"
            shortDescription="A well known restaurant that has dosens of branches across Saudi Arabia"
            lat={324234}
            long={23423234}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow