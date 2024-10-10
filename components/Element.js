import { Text, View, StyleSheet } from "react-native";
// import { useAppContext } from "../AppContext";

export default function Element({route}) {
    const { item } = route.params;

    return (
        <View style={styles.eleme}>
            <Text style={styles.text}>Title: {item.title}</Text>
            <Text style={styles.text}>Descrription: {item.description}</Text>
            <Text style={styles.link}>Go to original news{item.url}</Text>
            <Text style={styles.text}>Content: {item.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 15,
        // margin: 30,
        fontWeight: 'bold',
        color: 'black'
        // textAlign: 'center'
    },
    eleme: {
        borderRadius: 14,
        backgroundColor: "#D9D9D9",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "black",
        textAlign: 'center', 
        margin: 10,
        marginTop: 33,
        padding: 15,
        height: "94%"
    },
    link: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
})
