import { View, Text, Image } from 'react-native';
export default function CardItem({ title = 'no title', image, caption = 'no caption'}) {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={image} style={{ width: 300, height: 200 }} />
            <Text>{caption}</Text>
        </View>
    );
}