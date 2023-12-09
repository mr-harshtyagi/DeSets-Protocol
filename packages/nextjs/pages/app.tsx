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
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Created DataSets</h2>
        <button
          onClick={() =>
            //@ts-nocheck
            {
              const createDatasetModal = document.getElementById("create_dataset_modal") as HTMLDialogElement;
              createDatasetModal.showModal();
            }
          }
          className="btn bg-purple-700 rounded-lg mr-20 mt-8 font-semibold text-white hover:bg-purple-900"
        >
          + Create DataSet
        </button>
      </div>
      <CreateDataSet />

      <div className=" text-white p-10 grid grid-cols-3 w-full">
        <DataSetCard dataSetName="Test" dataSetDescription="Test Description" buttonType="created" />
        <DataSetCard dataSetName="Test" dataSetDescription="Test Description" buttonType="created" />
      </div>
      <Footer />

      {/* Owned datasets */}

      <div className="flex justify-between">
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Owned DataSets</h2>
      </div>
      <CreateDataSet />

      <div className=" text-white p-10 grid grid-cols-3 w-full">
        <DataSetCard dataSetName="Test" dataSetDescription="Test Description" buttonType="owned" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
