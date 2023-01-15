import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from "react-native";

export default function Tutorial1({ navigation }) {

    return (
        <View style={styles.container}>

            <Image
                source={require('../images/tutorial1.png')}
                style={{ width: 200, height: 450, borderWidth: 2, borderColor: "red" }}
            />
            <Text style={styles.text}>
                First of all, to create a reminder you have to click on the button below. As an illustration consider the image above.
            </Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Tutorial2")}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#345da7",
    },
    text: {
        fontSize: 20,
        color: "#fff",
        margin: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#4bb4de",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        margin: 20,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});
