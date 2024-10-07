import { StyleSheet, View, FlatList} from 'react-native';
// import { useState } from 'react';
import React, { useState } from 'react';
import Element from './components/Element';
import ListNews from './components/ListNews';

// TODO: Finish all funxtions ofr MVP; Deploy & Test server

export default function App() {
  
 
  return (
    <View>
      <FlatList style={styles.list} data={news} renderItem={({item}) => (
        <ListNews el={item} />
      )} />
      {/* <Element el={news[0]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {  
    marginTop: 50,
    marginHorizontal: 10,
    // backgroundColor: "",  
    padding: 10 // yellow
  }
});
