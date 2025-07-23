import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import SearchContextProvider from "./context/SearchContextProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./state/store/store.js";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <SearchContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </Provider>
  </StrictMode>
);
