import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <HelloWorld props={{
        cars: []
      }} />
    </React.StrictMode>
  );
}

export default HomePage;
