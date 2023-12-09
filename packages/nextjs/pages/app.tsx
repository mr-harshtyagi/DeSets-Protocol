import React from "react";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container text-white">
        <h1>App</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
