import { ScrollView, StyleSheet, Text } from "react-native"
import { useState, useEffect } from "react"
import RestCard from "./RestCard"



export default function RestList({ selectRestaurant }){
    const [restaurants, setRestaurants] = useState()
    const [chosenRestaurant, setChosenRestaurant] = useState()
    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
        .then(res => res.json())
        .then(setRestaurants)
        .catch(alert)
    },[])

    useEffect(() => {
        if(selectRestaurant > 0){
            const index = Math.floor(selectRestaurant * restaurants.length)
            setChosenRestaurant(restaurants[index])
        } else {
            setChosenRestaurant()
        }
    }, [selectRestaurant])


    return(

        <>
        <ScrollView style={styles.scrollingList}>
            {!restaurants
            ? <Text style={styles.loadingText}>Loading...</Text>
            : (chosenRestaurant)
                ? <RestCard key={chosenRestaurant._id} restaurant={chosenRestaurant} />
                : restaurants.map( restaurant => (
                <RestCard key={restaurant._id} restaurant={restaurant} />
            ))
        }
        </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    loadingText: {
        padding: 8,
        fontSize: 24,
        color: "#eee",
        textAlign: 'center',

    },
    scrollingList: {
       
        width: '90%',
        marginTop: 15,
        marginBottom: 20,
        borderRadius: 20,
    }
})
