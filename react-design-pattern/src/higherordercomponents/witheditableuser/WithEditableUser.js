import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const WithEditableUser = (Component) => {
    return function WrappedComponent({ userId, ...props }) {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                try {
                    const response = await axios.get(`/users/${userId}`);
                    setOriginalUser(response.data);
                    setUser(response.data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            })();
        }, [userId]);

        const onChangeUser = changes => {
            setUser(prevUser => ({ ...prevUser, ...changes }));
        };

        const onSaveUser = async () => {
            try {
                const response = await axios.post(`/users/${userId}`, user);
                setOriginalUser(response.data);
                setUser(response.data);
            } catch (error) {
                console.error("Error saving user:", error);
            }
        };

        const onResetUser = () => {
            setUser(originalUser);
        };

        return (
            <Component
                {...props}
                user={user}
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser}
            />
        );
    };
};
