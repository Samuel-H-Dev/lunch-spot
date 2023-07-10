import { View, Text, StyleSheet, TouchableOpacity} from "react-native"


export default function Tray({ setSelectRestaurant }){

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }

    const clear = () => {
        setSelectRestaurant(0)
    }

    return(

        <View style={styles.tray}>
            <View style={styles.buttonList}>
            <TouchableOpacity onPress={choose} style={styles.button}>
                <Text style={styles.buttonText}>Shuffle</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} onPress={clear}>
                <Text>Reset</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
resetButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 13,
    
    },
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
},
buttonList: {
    display: "flex",
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-evenly',
}
})


