import React from "react";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className=" text-white p-10 grid grid-cols-3 w-full">
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
