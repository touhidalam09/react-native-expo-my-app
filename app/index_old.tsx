
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome, Hello World!</Text>
      <Link href={'/about'}>Go to about</Link>
      <Link href={'/details'}>Click details</Link>
    </View>
  );
}
