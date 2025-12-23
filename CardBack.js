import React from "react";
import {View, Text, StyleSheet} from "react-native";
import CardList from "./CardList";

export default function CardBack() {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Natalia Partridge</Text>
            <Text style={styles.link}>@natalia.dev.com</Text>
        <View style={styles.listWrapper}>
            <CardList />
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        padding: 16,
        borderRadius: 14,
        borderWidth: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 6,
    },
    link: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 14,
    },
    listWrapper: {
        paddingTop: 8,
        borderTopWidth: 1,
    },
});