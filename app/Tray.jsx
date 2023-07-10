import { View, Text,StyleSheet, TouchableOpacity} from "react-native"


export default function Tray({ setSelectRestaurant }){

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }


    return(

        <View style={styles.tray}>
            <TouchableOpacity onPress={choose} style={styles.button}>
                <Text style={styles.buttonText}>Shuffle</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
button: {
    backgroundColor: 'pink',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 13,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black'
},
buttonText: {
    
    fontSize: 20,
    color: 'white',
    fontWeight: 400,
},
tray: {
    width: '100%',
    height: 70,
    backgroundColor: '#e9eeff',
    alignItems: "center",
    justifyContent: 'center'
}
})


