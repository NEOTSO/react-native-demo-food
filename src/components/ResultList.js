import React from "react";

import { View, Image, Text, FlatList, StyleSheet } from "react-native";

import ResultDetail from "../components/ResultDetail";

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 15,
        fontSize: 20,
        fontWeight: "bold",
    },
    list: {
        marginTop: 30,
    },
});

export default ResultList = ({ title, data }) => {
    
    return (
        <View style={styles.list}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <ResultDetail result={item} />;
                }}
            ></FlatList>
        </View>
    );
};
