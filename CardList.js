import React, {useContext} from "react";
import {View, Text, SectionList, StyleSheet} from "react-native";
import { ThemeContext } from "./ThemeContext";

export default function CardList(){
    const {darkMode} = useContext(ThemeContext);
    const sections = [
        {
            title: "Services/Products",
            data: [
                "Resume + Cover Letter Assistance",
                "HR Onboarding Support",
                "Dance Coaching Sessions",
                "Website/App Development",
            ],
        },
        {
            title: "Skills and Abilities",
            data: [
                "React Native - Basics",
                "Communication + Mentoring",
                "Recruiting and HR Coordination",
                "Community Engagement",
            ],
        },
    ];

    return (
        <View>
            <SectionList
            sections={sections}
            keyExtractor={(item, index)=> item + index}
            renderSectionHeader={({section}) => (
                <Text style={[styles.sectionHeader, darkMode ? styles.textDark : styles.textLight]}>{section.title}</Text>
            )}
            renderItem={({item}) => (
                <View style={styles.itemRow}>
                    <Text style={[styles.bullet, darkMode ? styles.textDark : styles.textLight]}>*</Text>
                    <Text style={[styles.itemText, darkMode ? styles.textDark : styles.textLight]}>{item}</Text>
            </View>
            )}
            ItemSeparatorComponent={() => <View style={[styles.separator, darkMode ? styles.separatorDark : styles.separatorLight]} />}
        />
        </View>
    );
}

const styles = StyleSheet.create ({
    sectionHeader: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 14,
        marginBottom: 8,
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 6,
    },
    bullet: {
        fontSize: 16,
        marginRight: 8,
        lineHeight: 20,
    },
    itemText: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 20,
        flex: 1,
    },
    textDark: {
        color: '#fff',
    },
    textLight: {
        color: '#000',
    },
    separator: {
        height: 1,
        opacity: 0.2,
    },
    separatorDark: {
        backgroundColor: '#fff',
    },
    separatorLight: {
        backgroundColor: '#000',
    },
});