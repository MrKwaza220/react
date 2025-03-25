import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResource = resourceUrl => {
    const [resource, setUseResource] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(resourceUrl);
                setUseResource(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, []); 
    return resource;
};
