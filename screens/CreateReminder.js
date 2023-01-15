import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import moment from "moment/moment";

export default function CreateReminder({ navigation }) {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [costs, setCosts] = React.useState("");
    const [selectedCycle, setSelectedCycle] = React.useState("");
    const [startDate, setStartDate] = useState(moment().toDate());

    const handleCycleChange = (itemValue) => {
        setSelectedCycle(itemValue);
        if (itemValue === 'week') {
            setStartDate((startDate) => moment(startDate).add(1, 'week').toDate());
        } else if (itemValue === 'month') {
            setStartDate((startDate) => moment(startDate).add(1, 'month').toDate());
        } else if (itemValue === 'year') {
            setStartDate((startDate) => moment(startDate).add(1, 'year').toDate());
        }
      }


    const [sub, setSub] = React.useState();
    const [subItems, setSubItems] = useState([]);

    const handleAddSub = () => {
        navigation.navigate('Home');
        setSubItems([...subItems, sub]);
        addSub();

    }

    const addSub = async () => {
        await setDoc(doc(firestore, 'subs', title), {
            title: title,
            costs: costs,
            cycle: selectedCycle,
            startDate: moment(startDate).format("YYYY-MM-DD"),
            description: description
        });
    }


    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.title}>Create Reminder</Text>
            </View>
            <ScrollView
                style={styles.main}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
            >
                <Text>Title of Subscription:</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"title"}
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <Text>Costs:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={cost => setCosts(cost)}
                    keyboardType="numeric"
                    placeholder={"CHF"}
                    value={costs}
                />
                <Text>Start:</Text>

                <Text>Payment Cycle:</Text>
                <Picker style={styles.picker}
                    selectedValue={selectedCycle}
                    onValueChange={handleCycleChange}>
                    <Picker.Item label='Every Week' value='week' />
                    <Picker.Item label='Every Month' value='month' />
                    <Picker.Item label='Every Year' value='year' />
                </Picker>
                <Text>Description:</Text>
                <TextInput
                    style={styles.multiInput}
                    placeholder={"description"}
                    onChangeText={description => setDescription(description)}
                    value={description}
                />
            </ScrollView>
            <View style={styles.buttonView}>
                <View style={{ width: '50%', paddingRight: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleAddSub}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', paddingLeft: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    multiInput: {
        height: 200,
        borderWidth: 1,
        padding: 10,
    },
    buttonView: {
        width: '100%',
        alignSelf: 'flex-end',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#efdbcb',
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
    picker: {

    }
});