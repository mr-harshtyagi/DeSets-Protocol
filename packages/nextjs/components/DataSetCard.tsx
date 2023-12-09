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
    <div className="card w-96 bg-base-100 shadow-xl m-4 hover:scale-105 hover:transition-transform duration-300 ease-in-out">
      {/* A gradient div */}
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-40 rounded-t-xl"></div>
      {/* The image */}
      {/* <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        /> */}

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
