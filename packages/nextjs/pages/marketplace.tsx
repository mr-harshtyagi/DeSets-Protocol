import React from "react";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

const Marketplace = () => {
  return (
    <div>
      <Header />
      {/* My DataSets Heading */}
      <h2 className="text-4xl text-white font-bold ml-10 mt-8">Explore All DataSets</h2>
      <div className=" text-white p-10 grid grid-cols-3 w-full">
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="View"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="View"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="View"
        />
        <DataSetCard
          dataSetName="Test"
          dataSetDescription="Test Description"
          dataSetNftBuyCounter={13}
          dataSetNftPrice={100}
          creatorWallet="0xhhhh"
          buttonText="View"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
