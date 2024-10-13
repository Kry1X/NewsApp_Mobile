import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { FlatList } from "react-native";
import { useAppContext } from "../AppContext";

export default function ListNews({navigation}) {
    const {news} = useAppContext();

    const renderItem = ({item}) => (  
        <TouchableOpacity style={styles.eleme} onPress={() => navigation.navigate('News', { item })}>
            <Text style={styles.text}>{item.title}</Text>
            <View style={styles.line} />
            <Text style={styles.source_text}>{item.source}</Text>
        </TouchableOpacity>
    );
    if (news.length !== 0) {
       return (
            <View>
                <FlatList 
                    style={{marginTop: 30}}
                    data={news}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View> 
        ) 
    } else {
        return (
            <View>
                <Text style={styles.text}>Zero news!</Text>
            </View>
        )
    }
    
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
        marginTop: 16,
        marginHorizontal: 10
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