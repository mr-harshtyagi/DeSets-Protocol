import React, { useEffect } from "react";
import { useContractRead } from "wagmi";
import { useAccount } from "wagmi";
import CreateDataSet from "~~/components/CreateDataSet";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import dataSetAbi from "~~/contracts/dataSetAbi";
import deployedContracts from "~~/contracts/deployedContracts";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const { address } = useAccount();

  const [ownedDataSets, setOwnedDataSets] = React.useState([]);
  const [createdDataSets, setCreatedDataSets] = React.useState([]);
  // const targetNetwork = useGlobalState(state => state.targetNetwork);
  // const setDataSets = useGlobalState(state => state.setDataSets);
  const dataSets = useGlobalState(state => state.dataSets);

  useEffect(() => {
    setOwnedDataSets(dataSets);
    setCreatedDataSets(dataSets);
  }, [dataSets]);

  return (
    <div>
      <Header />
      {/* My DataSets Heading */}
      <div className="flex justify-between">
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Owned DataSets</h2>
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
        {createdDataSets &&
          createdDataSets.map(dataSetAddress => (
            <DataSetCard
              key={1}
              dataSetName="Test 1"
              dataSetDescription="Test Description"
              dataSetAddress={dataSetAddress}
              buttonType="owned"
            />
          ))}
      </div>
      <Footer />

      {/* Owned datasets */}

      {/* <div className="flex justify-between">
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Owned DataSets</h2>
      </div>
      <CreateDataSet />

      <div className=" text-white p-10 grid grid-cols-3 w-full">
        {ownedDataSets &&
          ownedDataSets.map(dataSetAddress => (
            <DataSetCard
              key={1}
              dataSetName="Test 1"
              dataSetDescription="Test Description"
              dataSetAddress={dataSetAddress}
              buttonType="q"
            />
          ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default App;
