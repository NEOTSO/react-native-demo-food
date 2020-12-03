import React, { useState, useEffect } from "react";
import { Text, Image, FlatList, StyleSheet } from "react-native";

import yelp from "../api/yelp";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginRight: 10,
    },
});

export default DetailScreen = ({ route }) => {
    const [detail, setDetail] = useState(null);
    const { id } = route.params;

    useEffect(() => {
        const getDetail = async (id) => {
            const { data } = await yelp.get(`/${id}`);
            setDetail(data);
        };

        getDetail(id);
    }, []);

    return (
        detail && (
            <>
                <Text style={styles.title}>{detail.name}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item}
                    data={detail.photos}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }} style={styles.image} />;
                    }}
                />
            </>
        )
    );
};
