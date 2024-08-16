import React, { useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import axios from 'axios';

declare global {
    interface Window {
      Telegram: any
    }
}

const Initializer: React.FC = () => {
    const userFriendlyAddress = useTonAddress();
    const formatTime = (time: string) => {
        const date = new Date(time);
        const day = date.getDate();
        const month = date.toLocaleString('ru-RU', { month: 'long' });
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day} ${month} ${hours}:${minutes}`;
    };

    useEffect(() => {
        const initializeUser = async () => {

        }

        initializeUser();
    }, [
        userFriendlyAddress
    ]);

    return null;
};

export default Initializer;

