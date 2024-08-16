import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
interface RouterProviderProps {
    children?: React.ReactNode;
}

const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
    return (
        <Router>
            {children}
            <Routes>
            </Routes>
        </Router>
    );
};

export default RouterProvider;
