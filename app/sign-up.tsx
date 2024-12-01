import MyButton from "@/components/ui/buttons/MyButton";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native"

const SignUp = () => {
    const routers = useRouter();
    const onSubmit = () => {
        routers.navigate("/")
    }
    return (
        <View style={{ padding: 20, gap: 20 }}>

            <Text style={styles.text}>Create a new account</Text>
            <View style={{ padding: 20, gap: 20 }}>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Your Username"
                // onChangeText={(e) => console.log(e)}
                /><TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Your Email"
                // onChangeText={(e) => console.log(e)}
                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Your Password"
                // onChangeText={(e) => console.log(e)}
                />
                <MyButton title={'Submit'} onPress={onSubmit} />
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
    inputContainer: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
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
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
    },
});


export default SignUp