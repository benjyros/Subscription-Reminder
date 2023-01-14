import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function Home({ navigation }) {

    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            var subscriptions = [];
            const c = collection(firestore, "reminders");
            const cSnap = await getDocs(c);

            cSnap.forEach((subscription) => {
                const newSubscription = {
                    title: subscription.data().title,
                    costs: subscription.data().costs,
                    cycle: subscription.data().selectedCycle,
                    description: subscription.data().description
                }
                subscriptions.push(newSubscription);
            });
            setSubscriptions(subscriptions);
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Twäwis-Reminder</Text>
            </View>
            <ScrollView style={styles.main}>

                {subscriptions.map(({ title, costs, cycle, description }, index) => (
                    <View
                        key={index}
                    >
                        <View style={styles.item}>
                            <View style={styles.upperRow}>
                                <View style={styles.itemSignal}></View>
                                <Text style={styles.textName}>{title}</Text>
                            </View>
                            <View style={styles.description}>
                                <Text style={styles.textDescription}>{description}</Text>
                            </View>
                            <View style={styles.paymentInfo}>
                                <Text style={styles.textPaymentInfo}>Payment is due {cycle}</Text>
                            </View>
                            <View style={styles.paymentAmount}>
                                <Text style={styles.textPaymentAmount}> {costs}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView >
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('CreateReminder')
                    }
                >
                    <Text style={styles.buttonText}>Create Reminder</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efdbcb',
    },
    header: {
        width: '100%',
        height: 125,
        backgroundColor: '#345da7',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 25,
        shadowColor: '#213861',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    main: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    buttonView: {
        width: '100%',
        alignSelf: 'flex-end',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#4bb4de',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    item: {
        padding: 10,
        backgroundColor: "skyblue",
        width: 320,
        height: 150,
        borderRadius: 10,
      },
      upperRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
      },
      itemSignal: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "lightgreen",
        
      },
      textName: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 18,
      },
      description: {
        paddingTop: 5,
    
      },
      textDescription: {
        fontSize: 15,
        flexShrink: 1,
      },
      paymentInfo: {
        position: "absolute",
        bottom: 5,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
      },
      textPaymentInfo: {
        fontSize: 13
      },
      paymentAmount: {
        position: "absolute",
        bottom: 5,
        right: 0,
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
      },
      textPaymentAmount: {
        fontWeight: "bold",
        fontSize: 18,
      }
});