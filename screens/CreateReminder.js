import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker'

export default function CreateReminder({ navigation }) {
    const [title, onChangeTitle] = React.useState("title");
    const [description, onChangDescription] = React.useState("description");
    const [costs, onChangeCosts] = React.useState("CHF");

    const [dateStart, setDateStart] = React.useState(new Date());
    const [dateEnd, setDateEnd] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);

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
                    onChangeText={text => onChangeTitle(text)}
                    placeholder={"title"}
                />
                <Text>Costs:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={cost => onChangeCosts(cost)}
                    keyboardType="numeric"
                    placeholder={"CHF"}
                />
                <Text>Start:</Text>
                <TextInput
                    style={styles.input}
                    onPressIn={() => setOpen(true)}
                    value={dateStart}
                />
                <DatePicker
                    modal
                    open={open}
                    date={dateStart}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDateStart(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <Text>End:</Text>
                <TextInput
                    style={styles.input}
                    onPressIn={() => setOpen(true)}
                    value={dateEnd}
                />
                <DatePicker
                    modal
                    open={open}
                    date={dateEnd}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDateEnd(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
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
                            navigation.navigate('Home')
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
});