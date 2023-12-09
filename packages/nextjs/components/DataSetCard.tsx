import React from "react";

interface DataSetCardProps {
  dataSetName: string;
  dataSetDescription: string;
  dataSetNftBuyCounter: number;
  dataSetNftPrice: number;
  creatorWallet: string;
}

const DataSetCard = ({
  dataSetName,
  dataSetDescription,
  dataSetNftBuyCounter,
  dataSetNftPrice,
  creatorWallet,
}: DataSetCardProps) => {
  return (
    <div className="flex flex-col justify-center text-center p-4 bg-slate-700 m-4 rounded-2xl hover:-translate-y-3 transform transition-transform duration-500 ease-in-out hover:scale-105">
      <h1>{dataSetName}</h1>
      <p>{dataSetDescription}</p>
      <p>{dataSetNftBuyCounter}</p>
      <p>{dataSetNftPrice}</p>
      <p>{creatorWallet}</p>
    </div>
  );
};

export default DataSetCard;
