import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState();

    const getResults = async (url) => {
        setLoading(true);
        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'db9b492084mshf3cdbb6462cbd91p1793f7jsn202fbc065f4a'
        }
    })
        const data = await res.json();

        setResults(data);
        setLoading(false);
    }
    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
          {children}
        </StateContext.Provider>
      );
};

export const useStateContext = () => useContext(StateContext);