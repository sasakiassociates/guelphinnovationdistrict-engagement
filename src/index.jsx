import React from 'react';
import ReactDOM from 'react-dom/client';
import { HenshuApp } from '@strategies/henshu-app';

import App from './App';
import seeds from './seeds';
import { HEAP_ID } from './config';


if (process.env.REACT_APP_HENSHU_ENV === 'production') {
    if (HEAP_ID !== '' && !window.heap.loaded) {
        window.heap.load(HEAP_ID);
    }
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HenshuApp config={undefined} seeds={seeds} langs={['en']}>
            <App />
        </HenshuApp>
    </React.StrictMode>
);
