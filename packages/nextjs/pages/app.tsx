import React from "react";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* My DataSets Heading */}
      <h2 className="text-4xl text-white font-bold ml-10 mt-8">Owned DataSets</h2>
      <div className=" text-white p-10 grid grid-cols-3 w-full">
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="Download"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="Download"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="Download"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="Download"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
