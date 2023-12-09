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
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title">{dataSetName}</h2>
        <p>{dataSetDescription}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DataSetCard;
