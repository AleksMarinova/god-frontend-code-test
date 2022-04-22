import { CarsContainer } from "../src/components/CarsContainer";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light" >
          <CarsContainer
            props={{
              cars: [],
            }}
          />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
