import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [searching, setSeaching] = useState(false);
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        onEndEditing();
    }, []);

    const onEndEditing = async (term) => {
        try {
            setSeaching(true);
            const { data } = await yelp.get("/search", {
                params: {
                    term,
                    location: "san jose",
                    limit: 20,
                },
            });
            setSeaching(false);
            setResults(data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage("Something went wrong");
        }
    };

    return [searching, onEndEditing, results, errorMessage];
};
