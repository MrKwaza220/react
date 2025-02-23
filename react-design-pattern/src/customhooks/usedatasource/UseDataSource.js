import { useState, useEffect } from 'react';
import axios from 'axios';

export const UseDataSource = getResourceFunc => {
    const [resource, setUseResource] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await getResourceFunc();
                setUseResource(result);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [getResourceFunc]); 
    return resource;
};
