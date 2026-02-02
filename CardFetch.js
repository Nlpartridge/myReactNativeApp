import {View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function CardFetch() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(
                "https://api.weather.gov/gridpoints/0Ax/96,41/forecast"
            );
            const json = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={StyleSheet.container}>
            <FlatList
            data={data}
            renderItem={({item}) => (
                <View style={StyleSheet.card}>
                    <Image
                    source={{ uri: item.icon }}
                    style={StyleSheet.icon}
                    />
                    <Text style={StyleSheet.day}>{item.name}</Text>
                    <Text style={StyleSheet.temp}>{item.temperature}F</Text>
                    </View>
            )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        alignItems: "center",
        marginBottom: 20,
    },
    icon: {
        width: 80,
        height: 80,
    },
    day: {
        fontSize: 18,
        fontWeight: "bold",
    },
    temp: {
        fontSize: 16,
    },
});