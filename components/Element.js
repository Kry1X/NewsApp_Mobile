import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
// import { useAppContext } from "../AppContext";

export default function Element({route}) {
    const { item } = route.params;

    const handlePress = () => {
        Linking.openURL(item.url).catch((err) => console.error("Error opening URL: ", err));
    };

    return (
        <View style={styles.eleme}>
            <Text style={styles.text_title}>{item.title}</Text>
            <Text style={styles.text_description}>{item.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <Text style={styles.link}>Go to news</Text>
            </TouchableOpacity>
            <Text style={styles.text_content}>{item.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    text_title: {
        marginTop: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    text_description: {
        marginTop: 15,
        // fontWeight: '',
        color: 'black'
    },
    text_content: {
        marginTop: 15,
        // fontWeight: 'bold',
        color: 'black'
    }
})
