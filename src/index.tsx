import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) {
    console.error('ERROR: mount container with id #root not found, shuting down app');
} else {
    const root = createRoot(container);
    root.render(<App />);
}