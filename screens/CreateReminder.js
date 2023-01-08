import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function CreateReminder({ navigation }) {
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [costs, onChangeCosts] = React.useState("CHF");

    const [sub, setSub] = React.useState();
    const [subItems, setSubItems] = useState([]);

    const handleAddSub = () => {
        navigation.navigate('Home');
        setSubItems([...subItems, sub]);
        setSub(null);
    }

    const [selectedCycle, setSelectedCycle] = React.useState();

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
                    onChangeText={cost => onChangeCosts(cost)}
                    keyboardType="numeric"
                    placeholder={"CHF"}
                />
                <Text>Payment Cycle:</Text>
                <Picker style={styles.picker}
                    selectedValue={selectedCycle}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedCycle(itemValue)
                    }>
                        <Picker.Item label='Every Week' value='week' />   
                        <Picker.Item label='Every Month' value='month' />    
                        <Picker.Item label='Every Year' value='year' />     
                    </Picker>
                <Text>Description:</Text>
                <TextInput
                    style={styles.multiInput}
                    multiline
                    numberOfLines={5}
                    onChangeText={text => onChangDescription(text)}
                    placeholder={"description"}
                />
            </ScrollView>
            <View style={styles.buttonView}>
                <View style={{ width: '50%', paddingRight: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            handleAddSub()
                        }
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