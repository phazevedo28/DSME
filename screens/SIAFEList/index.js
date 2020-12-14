import React from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import DATA from './mock';

function SIAFEList() {

  const Item = ({ item }) => {
    return (
      <TouchableOpacity  style={styles.item}>
        <Text style={styles.title}>{item.codigoDescricaoFormatado}</Text>
      </TouchableOpacity >
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={({ codigo }) => codigo}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: "#000",
    fontSize: 24
  }
});

export default SIAFEList;