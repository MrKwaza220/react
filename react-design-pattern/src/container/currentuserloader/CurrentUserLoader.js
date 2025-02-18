import React, {useSate, useEffect, Children} from 'react';
import axios from 'axios';

export const CurrentUserLoader = ({Children}) => {
    const [user, setUser] = useSate(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/curent-user');
            setUser(response.data);
        })();
    },[] )

    return(
        <>
            {React.Children.map(Children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }

                return child;
            })

            }
        </>
    )
}