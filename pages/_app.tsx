import { CarsContainer } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light" >
          <main>
          <CarsContainer
            props={{
              cars: [],
            }}
          />
          </main>
          
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
