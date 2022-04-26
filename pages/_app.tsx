import CarsContainer  from "../src/components/CarsContainer";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import React from "react";
import Header from "../src/components/Header";
import Head from "next/head";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker>
          <Head>
            <title>Volvo cars</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" lang="en"/>
          </Head>
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
