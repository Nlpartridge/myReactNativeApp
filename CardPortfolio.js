import { View, Text, Image, Button } from 'react-native';
import { useState } from 'react';
import CardItem from './CardItem';

export default function CardPortfolio() {
    const ITEMS = {
        item1: {
            title: 'Project One',
            image: require('./image1.jpg'),
            caption: 'This is one of my fav projects.'
        },
        item2: {
            title: 'Project Two',
            image: require('./image2.jpg'),
            caption: 'A porject I would love to keep working on and advance.'
        },
        item3: {
            title: 'Project Three',
            image: require('./image3.jpg'),
            caption: 'This shows my creative side.'
        }
    };
    const [nextItem, setNextItem] = useState(1);
    function handleNextItem() {
        if (nextItem < 3) {
            setNextItem(nextItem + 1);
        } else {
            setNextItem(1);
        }
    }
    return (
        <View>
            <Text>Portfolio</Text>
            <Text> Here are some examples of my work:</Text>
            <CardItem
            title={ITEMS['item' + nextItem].title}
            image={ITEMS['item' + nextItem].image}
            caption={ITEMS['item' + nextItem].caption}
            />
            <Button title="Next Project" onPress={handleNextItem} />
        </View>
    );
}