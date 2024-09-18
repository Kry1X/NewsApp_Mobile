import { Text, View, StyleSheet } from "react-native";

export default function Element() {
    return (
        <View style={styles.news}>
            <Text style={styles.testT}>-Title</Text>
            <Text style={styles.testT}>-Descrription</Text>
            <Text style={styles.testT}>-Url</Text>
            <Text style={styles.testT}>-Content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    news: {
        // backgroundColor: 'red',
        borderRadius: 10,
        padding: 100
    },
    testT: {
        backgroundColor: 'yellow',
        textAlign: 'center',
    }
})
