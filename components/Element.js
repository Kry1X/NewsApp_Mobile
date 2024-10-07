import { Text, View, StyleSheet } from "react-native";

export default function Element({el}) {
    return (
        <View style={styles.eleme}>
            <Text style={styles.text}>Title: {el.title}</Text>
            <Text style={styles.text}>Descrription: {el.description}</Text>
            <Text style={styles.link}>Go to original news{el.url}</Text>
            <Text style={styles.text}>Content: {el.content}</Text>
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
