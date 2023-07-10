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
        borderWidth: 3,
        borderColor: '#a3a3a3',
        borderStyle: "solid",
    },
    card: {
        padding: 8,
        margin: 8, 
        paddingVertical: 12,
        borderRadius: 12, 
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 0.28,
        // shadowRadius: 5.51,
        
        // elevation: 15,
    },
    title: {
        color: '#203040',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 12,
    }
})
