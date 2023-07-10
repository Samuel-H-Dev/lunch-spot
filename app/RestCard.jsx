import { View, Image, StyleSheet, Text } from "react-native"

export default function RestCard({ restaurant }){


    return(
        <View style={styles.card}>
            <Image src={restaurant.photo_url} style={styles.image}/>
            <Text style={styles.title}>{restaurant.name}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 6,
    },
    card: {
        padding: 8,
        margin: 8, 
        borderRadius: 12, 
        backgroundColor: '#e9eeff',
    },
    title: {
        color: '#203040',
        fontSize: 28,
        textAlign: 'center'
    }
})
