import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from "react-native";

export default function Tutorial5({ navigation }) {

    return (
        <View style={styles.container}>

            <Image
                source={require('../images/tutorial5.png')}
                style={{ width: 200, height: 450, borderWidth: 2, borderColor: "red" }}
            />
            <Text style={styles.text}>
                And voila! Your reminder was created.
            </Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Tutorial4")}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Home")}
                >
                    <Text style={styles.buttonText}>Finish</Text>
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
