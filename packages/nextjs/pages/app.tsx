import React from "react";
import CreateDataSet from "~~/components/CreateDataSet";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* My DataSets Heading */}
      <div className="flex justify-between">
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Owned DataSets</h2>
        <button
          onClick={() => document.getElementById("create_dataset_modal").showModal()}
          className="btn btn-active btn-primary rounded-lg mr-20 mt-8 font-semibold text-white hover:scale-105 "
        >
          + Create DataSet
        </button>
      </div>
      <CreateDataSet />

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
