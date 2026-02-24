import React, {useContext} from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

export default function CardItem({ title = 'no title', image, caption = 'no caption', tech = "", onPress }) {
    const {darkMode} = useContext(ThemeContext);
    return (
        <Pressable onPress={onPress} disabled={!onPress}>
            <View style={[styles.card, darkMode ? styles.cardDark : styles.cardLight]}>
                <Text style={[styles.title, darkMode ? styles.textDark : styles.textLight]}>{title}</Text>
                <Image source={image} style={styles.image} />
                <Text style={[styles.caption, darkMode ? styles.textDark : styles.textLight]}>{caption}</Text>
                {tech ? <Text style={[styles.tech, darkMode ? styles.textDark : styles.textLight]}>{tech}</Text> : null}
                <Text style={darkMode ? styles.textDark : styles.textLight}>{title}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    card: {
        width: 300,
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
    },
    cardDark: {
        backgroundColor: '#000',
        borderColor: '#fff',
    }, 
    cardLight: {
        backgroundColor: '#fff',
        borderColor: '#000',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    caption: {
        fontSize: 14,
        marginBottom: 6,
    },
    tech: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    textDark: {
        color: '#fff',
    },
    textLight: {
        color: '#000',
    },
});