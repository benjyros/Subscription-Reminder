import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subscription = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.upperRow}>
        <View style={styles.itemSignal}></View>
        <Text style={styles.textName}>{props.name}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{props.description}</Text>
      </View>
      <View style={styles.paymentInfo}>
        <Text style={styles.textPaymentInfo}>Payment is due {props.paymentDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  textPaymentInfo: {
    fontSize: 13
  },
});

export default Subscription;
