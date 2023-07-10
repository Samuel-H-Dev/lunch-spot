import { View, Text, StyleSheet, TouchableOpacity, Button} from "react-native"


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
                <Text style={styles.buttonText}>Food roulette</Text>
            </TouchableOpacity>

            {/* <Button title="hello" onPress={choose}>Hello</Button> */}

            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={clear}>
                <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
resetButton: {
    backgroundColor: '#f4f5f6',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ed714d',
    borderRadius: 20,
    
    },
button: {
    backgroundColor: '#ed714d',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#f79477'
},
buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 400,
},
resetButtonText: {
    fontSize: 20,
    color: '#777',
    fontWeight: 400,
},
tray: {

    width: '100%',
    height: 70,
    backgroundColor: '#e9eeff',
    alignItems: "center",
    justifyContent: 'center',
        //   shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: -10,
        // },
        // shadowOpacity: 0.98,
        // shadowRadius: 9.51,
        
        // elevation: 20,
},
buttonList: {
    display: "flex",
    flexDirection: "row",
    width: '90%',
    justifyContent: 'space-evenly',
}
})


