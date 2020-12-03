import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    view: {
        margin: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10,
    },
});

export default ResultDetail = ({ result }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: result.id })} style={styles.view}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews.
            </Text>
        </TouchableOpacity>
    );
};
