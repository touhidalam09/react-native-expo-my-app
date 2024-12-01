import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabRoot() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato' }} >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  )
}
