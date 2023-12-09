import React from "react";

interface DataSetCardProps {
  dataSetName: string;
  dataSetDescription: string;
  dataSetNftBuyCounter: number;
  dataSetNftPrice: number;
  creatorWallet: string;
  buttonText: string;
}

const DataSetCard = ({
  dataSetName,
  dataSetDescription,
  dataSetNftBuyCounter,
  dataSetNftPrice,
  creatorWallet,
  buttonText,
}: DataSetCardProps) => {
  // generate random gradients
  const gradients: string[] = [
    "bg-gradient-to-r from-cyan-500 to-blue-500 h-40 rounded-t-xl",
    "bg-gradient-to-r from-green-500 to-blue-500 h-40 rounded-t-xl",
    "bg-gradient-to-r from-red-500 to-pink-500 h-40 rounded-t-xl",
    "bg-gradient-to-r from-yellow-500 to-green-500 h-40 rounded-t-xl",
  ];
  // select gradient from gradients array
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4 hover:scale-105 hover:transition-transform duration-300 ease-in-out">
      {/* A gradient div */}
      <div className={gradient}></div>
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
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default DataSetCard;
