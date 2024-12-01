import MyButton from "@/components/ui/buttons/MyButton"
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native"

const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" };

const Index = () => {
    const routers = useRouter();
    const onContinue = () => {
        routers.navigate("/sign-in")
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.text}>
                    <MyButton title={'Continue'} onPress={onContinue} />
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        /* @info Make the containing view fill the screen */
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        /* @info Make the image fill the containing view */
        flex: 1,
        /* @info Scale up the image to fill the container, preserving aspect ratio */
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    },
});

export default Index