import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View, VirtualizedList, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

import { firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

import moment from "moment/moment";

export default function CreateReminder({ navigation }) {
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [days, setDays] = useState([]);
    const [months, setMonths] = useState([]);
    const [years, setYears] = useState([]);
    const [openDay, setOpenDay] = useState(false);
    const [openMonth, setOpenMonth] = useState(false);
    const [openYear, setOpenYear] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [costs, setCosts] = useState("");
    const [selectedCycle, setSelectedCycle] = useState("week");
    const [dueTo, setDueTo] = useState("");

    useEffect(() => {
        function fetchData() {
            var days = [];
            var months = [];
            var years = [];

            for (let i = 1; i <= 31; i++) {
                var label = i;
                if (i < 10) {
                    label = "0" + label;
                }
                const newDay = {
                    label: label,
                    value: label,
                }
                days.push(newDay);
            }
            for (let i = 1; i <= 12; i++) {
                var label = i;
                if (i < 10) {
                    label = "0" + label;
                }
                const newMonth = {
                    label: label,
                    value: label,
                }
                months.push(newMonth);
            }
            for (let i = 1970; i <= new Date().getFullYear(); i++) {
                const newYear = {
                    label: i,
                    value: i,
                }
                years.push(newYear);
            }

            setDays(days);
            setMonths(months);
            setYears(years);
        };
        fetchData();
    }, [])

    const handleCycleChange = (itemValue) => {
        setSelectedCycle(itemValue);
    }


    const handleAddSub = () => {
        if (day != "" && month != "" && year != "" && title != "" && costs != "") {
            const date = year + "-" + month + "-" + day;
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (dateRegex.test(date) && !moment(date).isAfter(moment())) {
                addSub();
                navigation.replace('Home');
            } else {
                alert("Entered date does not exist!");
            }
        } else {
            alert("Please check the details again.");
        }

    }

    const setUntilTo = async () => {
        
        getDueTo();
        
    }

    const getDueTo = () => {
        const date = year + "-" + month + "-" + day;
        const currentDate = new Date();
        const newDate = new Date(date);
        const currentTimeInSeconds = currentDate.getTime();
        var dueTo = newDate.getTime();
        if (selectedCycle === "week") {
            //const newDate = moment(date, "YYYY-MM-DD").add(7, 'days');
            do {
                dueTo = dueTo + (7 * 24 * 60 * 60 * 1000);
            } while (dueTo < currentTimeInSeconds);
        } else if (selectedCycle === "month") {
            let i = 1;
            do {
                dueTo = moment(dueTo).add(i, "months").endOf("month").valueOf();
                i++;
            } while (dueTo < currentTimeInSeconds);
        } else if (selectedCycle === "year") {
            let i = 1;
            do {
                dueTo = moment(dueTo).add(i, "years").valueOf();
                i++;
            } while (dueTo < currentTimeInSeconds);
        }
        return dueTo;
        //etDueTo(dueTo);
        //addSub();
    }

    const addSub = async () => {
        var dueTo = getDueTo();
        let date = new Date(dueTo);
        let formattedDate = date.toISOString().slice(0, 10);

        var currentTimeInSeconds = Math.round(new Date().getTime() / 1000);
        await setDoc(doc(firestore, 'subs', formattedDate + ":" + currentTimeInSeconds.toString()), {
            id: currentTimeInSeconds.toString(),
            title: title,
            costs: costs,
            cycle: selectedCycle,
            dueTo: formattedDate,
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
                <View style={styles.components}>
                    <Text>Title of Subscription:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={"title"}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
                <View style={styles.components}>
                    <Text>Costs:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={cost => setCosts(cost)}
                        keyboardType="numeric"
                        placeholder={"CHF"}
                        value={costs}
                    />
                </View>
                <View style={styles.components}>
                    <Text>Startdate {"("}yyyy-mm-dd{")"}:</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <DropDownPicker
                            open={openDay}
                            value={day}
                            items={days}
                            setOpen={setOpenDay}
                            onOpen={() => {
                                setOpenMonth();
                                setOpenYear();
                            }}
                            setValue={setDay}
                            setItems={setDays}
                            maxHeight={150}
                            textStyle={{
                                fontSize: 10,
                            }}
                            style={{ backgroundColor: "#efdbcb" }}
                            containerStyle={{ width: 100 }}
                        />


                        <Text style={{ margin: 10 }}>-</Text>
                        <DropDownPicker
                            open={openMonth}
                            value={month}
                            items={months}
                            setOpen={setOpenMonth}
                            onOpen={() => {
                                setOpenDay();
                                setOpenYear();
                            }}
                            setValue={setMonth}
                            setItems={setMonths}
                            maxHeight={150}
                            textStyle={{
                                fontSize: 10
                            }}
                            style={{ backgroundColor: "#efdbcb" }}
                            containerStyle={{ width: 100 }}
                        />

                        <Text style={{ margin: 10 }}>-</Text>
                        <DropDownPicker
                            open={openYear}
                            value={year}
                            items={years}
                            setOpen={setOpenYear}
                            onOpen={() => {
                                setOpenDay();
                                setOpenMonth();
                            }}
                            setValue={setYear}
                            setItems={setYears}
                            maxHeight={150}
                            textStyle={{
                                fontSize: 10
                            }}
                            style={{ backgroundColor: "#efdbcb" }}
                            containerStyle={{ width: 100 }}
                        />

                    </View>
                </View>
                <View style={[styles.components, { marginTop: 150 }]}>
                    <Text>Payment Cycle:</Text>
                    <Picker
                        selectedValue={selectedCycle}
                        onValueChange={handleCycleChange}
                    >
                        <Picker.Item label='Every Week' value='week' />
                        <Picker.Item label='Every Month' value='month' />
                        <Picker.Item label='Every Year' value='year' />
                    </Picker>
                </View>
                <View style={styles.components}>
                    <Text>Description:</Text>
                    <TextInput
                        style={styles.multiInput}
                        placeholder={"description"}
                        onChangeText={description => setDescription(description)}
                        value={description}
                    />
                </View>
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
                            navigation.replace('Home')
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
    components: {
        marginBottom: 30,
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