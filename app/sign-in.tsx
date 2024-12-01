import MyButton from "@/components/ui/buttons/MyButton";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native"

const SignIn = () => {
    const router = useRouter()
    const onLogin = () => {
        // Navigate to the home screen when the login button is pressed
        // Replace '/home' with the desired route
        router.navigate("/sign-up")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <View style={{ padding: 20, gap: 20 }}>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Your Email"
                // onChangeText={(e) => console.log(e)}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Your Password"
                // onChangeText={(e) => console.log(e)}
                />
                <MyButton title={'Submit'} onPress={onLogin} />
            </View>
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
    inputContainer: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    },
});

export default SignIn