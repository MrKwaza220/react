import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const WithEditableResource = (Component) => {
    return props => {
        const [originalData, setOriginalData] = useState(null);
        const [data, setData] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(resourcePath);
                setOriginalData(response.data);
                setData(response.data);
            })();
            }, []);

            const onChangeUser = changes => {
                setData({ ...data, ...changes });
            };

            const onSaveUser = async () => {
                const response = await axios.post(resourcePath, {[resourceName]: data});
                setOriginalData(response.data);
                setData(response.data);
            };

            const onResetData = () => {
                setData(originalData);
            }

            return <Component 
            {...props} 
            user={data}
            onChange={onChange}
            onSave={onSave}
            onReset={onReset}
            />;


    }
}