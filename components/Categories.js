import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}>
        <CategoryCard title="testing" imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"/>
        <CategoryCard title="testing" imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"/>
        <CategoryCard title="testing" imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"/>
        <CategoryCard title="testing" imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"/>
        <CategoryCard title="testing" imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"/>
        <CategoryCard title="testing" imgUrl="https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1681948800&v=beta&t=2BhRN6VFBJw7Rt6BpBQvmw_Pvm1JylFqxhIHaEUdrqI"/>
       
    </ScrollView>
  )
}

export default Categories