import { CarsContainer } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";
import Header from "../src/components/Header";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker>
          <main>
            <Header />
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
