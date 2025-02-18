import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Failed to load current user:", error);
            }
        })();
    }, [userId]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }
                return child;
            })}
        </>
    );
};
