import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from "react-native";

export default function Tutorial3({ navigation }) {

    return (
        <View style={styles.container}>

            <Image
                source={require('../images/tutorial3.png')}
                style={{ width: 350, height: 200, borderWidth: 2, borderColor: "red" }}
            />
            <Text style={styles.text}>
                As for the payment cycle, enter the cycle where you have to pay every time.
            </Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Tutorial2")}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Tutorial4")}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
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
