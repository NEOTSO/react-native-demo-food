import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

import useResults from "../hooks/useResults";
const styles = StyleSheet.create({
    error: {
        marginHorizontal: 15,
        marginTop: 5,
    },
});

export default HomeSreen = () => {
    const [search, setSearch] = useState("");
    const [searching, onEndEditing, results, errorMessage] = useResults();

    const filerResults = (filter) => {
        return results.filter((item) => item.price === filter);
    };

    return (
        <>
            <SearchBar value={search} onChangeText={setSearch} onEndEditing={() => onEndEditing(search)} />
            {errorMessage !== "" && <Text style={styles.error}>{errorMessage}</Text>}
            <Text style={styles.error}>{searching ? "searching, wait please." : `We have found ${results.length} results.`}</Text>
            <ScrollView>
                <ResultList title="Cost Effective" data={filerResults("$")} />
                <ResultList title="Big Pricer" data={filerResults("$$")} />
                <ResultList title="Big Pricer" data={filerResults("$$")} />
                <ResultList title="Big Spender" data={filerResults("$$$")} />
            </ScrollView>
        </>
    );
};
