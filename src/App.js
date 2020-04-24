import React from "react";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header title="Money">
        <ol>
          <li>Guns</li>
          <li>Guns</li>
        </ol>
      </Header>
      <Header title="Bunnies" />
      <Header title="Trees">
        <ol>
          <li>Sativa</li>
          <li>Indica</li>
          <li>Hybrids</li>
        </ol>
      </Header>
    </>
  );
};

export default App;
