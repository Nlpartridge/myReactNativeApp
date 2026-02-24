import React, {useContext, useEffect, useState, useCallback} from "react";
import {View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Button } from "react-native";
import { ThemeContext } from "./ThemeContext";

export default function CardFetch() {
    const [data, setData] = useState([]);
    const {darkMode} = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const getData = useCallback(async (isRefresh = false) => {
        if (isRefresh) {
            setRefreshing(true);
        } else {
            setLoading(true);
        }
        setError(null);
        try {
            const response = await fetch(
                "https://api.weather.gov/gridpoints/0Ax/96,41/forecast"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            const periods = json?.properties?.periods ?? [];
            setData(periods);
        } catch (fetchError) {
            setError(fetchError.message || "An error occurred while fetching data");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    const renderWeatherCard = ({ item }) => (
        <View style={[styles.card, darkMode ? styles.cardDark : styles.cardLight]}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={[styles.day, darkMode ? styles.textDark : styles.textLight]}>{item.name}</Text>
            <Text style={[styles.temp, darkMode ? styles.textDark : styles.textLight]}>{item.temperature}F</Text>
            <Text style={[styles.forecast, darkMode ? styles.textDark : styles.textLight]}>{item.detailedForecast}</Text>
        </View>
    );

    return (
        <View style={[styles.container, darkMode ? styles.containerDark : styles.containerLight]}>
            {loading && !refreshing ? (
                <>
                    <ActivityIndicator size="large" />
                    <Text style={[styles.stateText, darkMode ? styles.textDark : styles.textLight]}>Loading...</Text>
                </>
            ) : null}
            {error ? (
                <View style={styles.centeredState}>
                    <Text style={styles.errorText}>{error}</Text>
                    <Button title="Retry" onPress={() => getData()} />
                </View>
            ) : null}
            {!loading && !error ? (
                <FlatList
                    data={data}
                    renderItem={renderWeatherCard}
                    keyExtractor={(item) => String(item.number ?? item.name)}
                    onRefresh={() => getData(true)}
                    refreshing={refreshing}
                    contentContainerStyle={styles.listContent}
                />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerDark: {
        backgroundColor: "#121212",
    },
    containerLight: {
        backgroundColor: "#f0f0f0",
    },
    listContent: {
        paddingBottom: 20,
    },
    card: {
        alignItems: "center",
        marginBottom: 20,
    },
    cardDark: {
        backgroundColor: "#1e1e1e",
        borderColor: "#333",
    },
    cardLight: {
        backgroundColor: "#ffffff",
        borderColor: "#ccc",
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
    forecast: {
        fontSize: 14,
        textAlign: "center",   
    },
    centeredState: {
        alignItems: "center",
        marginTop: 20,
        gap: 10,
    },
    stateText: {
        fontSize: 16,
    },
    errorText: {
        color: "red",
        fontSize: 16,
        textAlign: "center",
    },
    textDark: {
        color: "#ffffff",   
    },
    textLight: {
        color: "#000000",
    },
});