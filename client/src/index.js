import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"
import App from './App'
import './index.css'
import { NavigationProvider } from "./context/navigation";
import { store } from "./store";

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </NavigationProvider>
)