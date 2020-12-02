import React from "react";

import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#f0eeee",
        backgroundColor: "pink",
        height: 50,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "red",
        flex: 1,
        padding: 15,
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default SearchBar = ({ onChangeText, onEndEditing }) => {
    return (
        <View style={styles.search}>
            <AntDesign style={styles.icon} name="search1" size={24} color="black" />
            <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Search" style={styles.input} onChangeText={onChangeText} onEndEditing={onEndEditing} />
        </View>
    );
};
