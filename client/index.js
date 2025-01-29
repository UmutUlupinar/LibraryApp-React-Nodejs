// client/src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App"; // App.js'in doğru yolu
import "./index.css"; // İsteğe bağlı: Global CSS dosyanız varsa buraya ekleyebilirsiniz

// React uygulamasını "root" div'ine render et
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);