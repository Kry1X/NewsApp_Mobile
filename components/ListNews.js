import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function ListNews({el}) {
    return (
        <TouchableOpacity style={styles.eleme}>
            <Text style={styles.text}>{el.title}</Text>
            <View style={styles.line} />
            <Text style={styles.source_text}>{el.source}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    source_text: {
        // fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    eleme: {
        borderRadius: 14,
        backgroundColor: "#D9D9D9",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "black",
        textAlign: 'center', 
        padding: 20,
        marginTop: 16
        // marginHorizontal: 10
    },
    line: {
        width: '100%', // Ширина линии
        height: 1, // Толщина линии
        backgroundColor: 'gray', // Цвет линии
        marginTop: 8,
        marginBottom: 3
    }
})