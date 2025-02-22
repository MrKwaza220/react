import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const WithUser = (Component) => {
    return function WrappedComponent({ userId, ...props }) {
        const [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await axios.get(`/users/${userId}`);
                    setUser(response.data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            };

            if (userId) {
                fetchUser();
            }
        }, [userId]);

        return <Component {...props} user={user} />;
    };
};
