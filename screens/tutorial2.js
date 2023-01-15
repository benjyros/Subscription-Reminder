import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from "react-native";

export default function Tutorial2({ navigation }) {

    return (
        <View style={styles.container}>

            <Image
                source={require('../images/tutorial2.png')}
                style={{ width: 300, height: 200, borderWidth: 2, borderColor: "red" }}
            />
            <Text style={styles.text}>
                In "Create Reminder":{"\n"}1. Enter a title for your subscription.{"\n"}2. Enter the costs for your subscription.{"\n"}3. Enter the date you created your subscription.
            </Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Tutorial1")}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Tutorial3")}
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
