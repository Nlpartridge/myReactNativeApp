import React from "react";
import {View, Text, SectionList, StyleSheet} from "react-native";

export default function CardList(){
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
                <Text style={StyleSheet.sectionHeader}>{section.title}</Text>
            )}
            renderItem={({item}) => (
                <View style={StyleSheet.itemRow}>
                    <Text style={StyleSheet.bullet}>*</Text>
                    <Text style={StyleSheet.itemText}>{item}</Text>
            </View>
            )}
            ItemSeparatorComponent={() => <View style={StyleSheet.separator} />}
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
    separator: {
        height: 1,
        opacity: 0.2,
    },
});