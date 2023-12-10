import React, { useEffect } from "react";
import { useContractRead } from "wagmi";
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
  const targetNetwork = useGlobalState(state => state.targetNetwork);
  // const setDataSets = useGlobalState(state => state.setDataSets);
  const dataSets = useGlobalState(state => state.dataSets);

  // function getDeSetsFactoryContract(chainId: any) {
  //   return deployedContracts[chainId as keyof typeof deployedContracts].DeSetsFactory;
  // }

  // const data = useScaffoldContractRead({ contractName: "DeSetsFactory", functionName: "getDataSetNFTs" });

  // if (dataSets) {
  //   console.log("data", dataSets);
  //   dataSets.map((dataSet: any) => {
  //     console.log("dataSet", dataSet);
  //     const { data, isError, isLoading } = useContractRead({
  //       address: dataSet,
  //       abi: dataSetAbi,
  //       functionName: "getDataSetInfo",
  //     });
  //   });
  // }

  // useEffect(() => {
  //   const getDatasets = async () => {
  //     setLoading(true);
  //     console.log("targetNetwork", targetNetwork.name, targetNetwork.id);
  //     const result = getDeSetsFactoryContract(targetNetwork.id);
  //     console.log("DeSetsFactory Contract", result);

  //     setDataSets(data.data);

  //     // console.log(data, isError, isLoading);

  //     setLoading(false);
  //   };
  //   getDatasets();
  // }, [data]);

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
        {dataSets &&
          dataSets.map((dataSet: any) => {
            <DataSetCard dataSetName="Test" dataSetDescription="Test Description" buttonType="created" />;
          })}
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
