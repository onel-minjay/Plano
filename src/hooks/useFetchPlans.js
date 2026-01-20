import { useState, useEffect } from 'react';
import { MOCK_PLANS } from '../mocks/mockPlans';

export const useFetchPlans = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setData(MOCK_PLANS);
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return { data, isLoading };
};