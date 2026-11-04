import React from "react";

import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";
import { CarProvider } from "./context/CarContext";
import { BikeProvider } from "./context/BikeContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CarProvider>
          <BikeProvider>
            <AppRoutes />
          </BikeProvider>
        </CarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;