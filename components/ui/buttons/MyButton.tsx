import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface MyButtonProps {
  title: string
  onPress?: () => void  // Function to be called when the button is pressed.
}

export default function MyButton({title="Button", onPress}: MyButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "orange",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  }
})