import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Tab() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitle: () => <LogoTitle />,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,

        }}
      />
      <Text>Tab [Home]</Text>

      <Link href={'/profile'}>Go to profile</Link>
      <Link href={{ pathname: '/details', params: { name: 'Bacon' } }}>Go to Details</Link>

      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'jack' },
        }}>
        View user details
      </Link>
      <Text>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
