import React, {useMemo, useState, useContext} from 'react';
import { View, Text, FlatList, Pressable, Modal, StyleSheet, Button } from 'react-native';
import CardItem from './CardItem';
import { ThemeContext } from './ThemeContext';  

export default function CardPortfolio() {
    const ITEMS = [
        {
            title: 'Project One',
            image: require('./image1.jpg'),
            caption: 'This is one of my fav projects.',
            category: 'Web Development',
            tech: 'React, Javascript',
        },
        {
            title: 'Project Two',
            image: require('./image2.jpg'),
            caption: 'A project I would love to keep working on and advance.',
            category: 'Mobile App',
            tech: 'React Native, Expo',
        },
        {
            title: 'Project Three',
            image: require('./image3.jpg'),
            caption: 'This shows my creative side.',
            category: 'Graphic Design',
            tech: 'Photoshop, Illustrator',
        }
    ];
    const FILTERS = ['All', 'Web Development', 'Mobile App', 'Graphic Design'];
    const {darkMode} = useContext(ThemeContext);
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = useMemo(() => {
        if (activeFilter === 'All') {
            return ITEMS;
        }
        return ITEMS.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <View style={[styles.container, darkMode ? styles.containerDark : styles.containerLight]}>
            <Text style={[styles.heading, darkMode ? styles.textDark : styles.textLight]}>My Portfolio</Text>
            <Text style={[styles.subheading, darkMode ? styles.textDark : styles.textLight]}>A showcase of my projects and skills.</Text>
            <View style={styles.filterRow}>
                {FILTERS.map(filter => (
                    <Pressable 
                        key={filter}
                        style={[
                            styles.filterChip,
                            darkMode ? styles.filterChipDark : styles.filterChipLight,
                            activeFilter === filter ? styles.filterChipActive : null,
                        ]}
                        onPress={() => setActiveFilter(filter)}
                    >
                        <Text style={darkMode ? styles.textDark : styles.textLight}>{filter}</Text>
                    </Pressable>
                ))}
            </View>
            <FlatList
                data={filteredItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <CardItem 
                            title={item.title}
                            image={item.image}
                            caption={item.caption}
                            category={item.category}
                            tech={item.tech}
                            onPress={() => openModal(item)}
                        />
                        </View>
                )}
            />
            <Modal visible={!!selectedItem} animationType="slide" transparent onRequestClose={closeModal}>
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalCard, darkMode ? styles.modalCardDark : styles.modalCardLight]}>
                       <Text style={[styles.modalTitle, darkMode ? styles.textDark : styles.textLight]}>{selectedItem?.title}</Text>
                       <Text style={[styles.modalText, darkMode ? styles.textDark : styles.textLight]}>{selectedItem?.caption}</Text>
                       <Text style={[styles.modalText, darkMode ? styles.textDark : styles.textLight]}>Category: {selectedItem?.category}</Text>
                       <Text style={[styles.modalText, darkMode ? styles.textDark : styles.textLight]}>Tech: {selectedItem?.tech}</Text>
                       <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    containerLight: {
        backgroundColor: '#f0f0f0',
    },
    textDark: {
        color: '#ffffff',
    },
    textLight: {
        color: '#000000',
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
    },
    subheading: {
        fontSize: 14,
        marginTop: 4,
        marginBottom: 12 
    },
    filterRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 12,
    },
    filterChip: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 999,
        borderWidth: 1,
        marginRight: 8,
        marginBottom: 8,
    },
    filterChipDark: {
        backgroundColor: '#333333',
        borderColor: '#555555',
    },
    filterChipLight: {
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
    },
    filterChipActive: {
        borderColor: '#007AFF',
    },
    filterText: {
        fontWeight: '600',
    },
    cardWrapper: {
        marginRight: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        padding: 20,
    },
    modalCard: {
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
    },
    modalCardDark: {
        backgroundColor: '#1e1e1e',
        borderColor: '#333333',
    },
    modalCardLight: {
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,   
    },
    modalText: {
        fontSize: 16,
        marginBottom: 4,
    },
});