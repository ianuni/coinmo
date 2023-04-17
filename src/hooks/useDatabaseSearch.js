import { useState } from 'react'
import {getSearch} from "../utils/database"

export const useDatabaseSearch= (collection, field) => {
    const [results, setResults] = useState();

    const handleChange = async (e) => {
        setResults(await getSearch(collection, field, e.target.value))
    }

    return {
        results,
        handleChange};
}