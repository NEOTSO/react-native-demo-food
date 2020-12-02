import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const styles = StyleSheet.create({});

const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return { ...state, search: action.payload };
        default:
            return state;
    }
};

export default HomeSreen = () => {
    const [searching, setSeaching] = useState(false);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    // const [state, dispatch] = useReducer(reducer, { search: "" });

    const onChangeText = (value) => {
        console.log(value);
        // dispatch({ type: "search", payload: value });
        setSearch(value);
    };

    const onEndEditing = async () => {
        try {
            setSeaching(true);
            const { data } = await yelp.get("/search", {
                params: {
                    term: search,
                    location: "san jose",
                },
            });
            setSeaching(false);
            setResults(data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage("Something went wrong");
        }
    };

    return (
        <View>
            <SearchBar onChangeText={onChangeText} onEndEditing={onEndEditing} />
            {errorMessage !== "" && <Text>{errorMessage}</Text>}
            <Text>{searching ? "searching, wait please." : `We have found ${results.length} results.`}</Text>
        </View>
    );
};
