import React, { useEffect, useRef } from 'react';
import { RouterProvider } from './providers/RouterProvider';
import { Header } from '@/widgets/Header';
import '@/app/styles/main.scss';
import '@/app/echo'
import { TonConnectProvider } from './providers/TonConnectProvider';
import Initializer from './initializer';
const App: React.FC = () => {
    const initialized = useRef(false);

    return (
        <TonConnectProvider>
            <Initializer />
            <RouterProvider>
                <Header />
            </RouterProvider>
        </TonConnectProvider>
    );
};

export default App;
