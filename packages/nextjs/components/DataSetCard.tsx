import React, { useEffect } from "react";
import { useContractRead } from "wagmi";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import dataSetAbi from "~~/contracts/dataSetAbi";

interface DataSetCardProps {
  dataSetName?: string;
  dataSetDescription?: string;
  dataSetAddress?: string;
  price?: number;
  totalSupply?: number;
  maxMintAmount?: number;
  reputationScore?: number;
  totalUpvotes?: number;
  totalDownvotes?: number;
  buttonType: string;
}

const DataSetCard = ({
  dataSetName = "Default Name",
  dataSetDescription = "Default Description",
  dataSetAddress,
  price,
  totalSupply,
  reputationScore,
  totalUpvotes,
  totalDownvotes,
  buttonType,
}: DataSetCardProps) => {
  console.log("Data set Address in card", dataSetAddress);

  const [dataSetData, setDataSetData] = React.useState({
    dataSetName: "",
    dataSetDescription: "",
    price: 0,
    totalSupply: 0,
    totalUpvotes: 0,
    totalDownvotes: 0,
    paused: "",
    owner: "",
  } as any);

  const { data, isError, isLoading } = useContractRead({
    address: dataSetAddress,
    abi: dataSetAbi,
    functionName: "getDataSetInfo",
  });

  useEffect(() => {
    if (data) {
      setDataSetData({
        dataSetName: data?.[0],
        dataSetDescription: data?.[1],
        price: data?.[2]?.toString(),
        totalSupply: data?.[3]?.toString(),
        totalUpvotes: data?.[4]?.toString(),
        totalDownvotes: data?.[5]?.toString(),
        paused: data?.[6],
        owner: data?.[7],
      });
    }
  }, [data]);

  console.log("dataSetData state", dataSetData);
  const reputationScoreValue: number = Math.abs(
    (Number(dataSetData.totalUpvotes) - Number(dataSetData.totalDownvotes) / Number(dataSetData.totalSupply)) * 100,
  );

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
    <div className="card w-96 bg-purple-50 shadow-xl m-4 hover:scale-105 hover:transition-transform duration-300 ease-in-out">
      {/* A gradient div */}
      <div className={gradient}></div>
      {/* The image */}
      {/* <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        /> */}

      <div className="card-body items-center">
        <div className="card-title font-bold text-3xl text-purple-900">{dataSetData.dataSetName}</div>
        <div className=" font-semibold text-lg text-purple-500">{dataSetData.dataSetDescription}</div>
        <div className="grid grid-cols-2 gap-4">
          <button className="btn bg-purple-300 hover:bg-purple-300 ">
            Price
            <div className="badge bg-purple-900 text-white font-semibold ">{dataSetData.price}</div>
          </button>
          <button className="btn bg-purple-300 hover:bg-purple-300">
            <ArrowDownTrayIcon className="w-6 h-6" />
            <div className="badge bg-purple-900 text-white font-semibold ">{dataSetData.totalSupply} times</div>
          </button>
          <div className="col-span-2">
            <hr className="border-t-2 border-purple-900" />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="rating flex items-center justify-between">
            <div className="text-purple-900 flex flex-col">
              <span>Reputation Score </span>
            </div>
            <div className="font-semibold text-purple-900">{reputationScoreValue} /100.0</div>{" "}
          </div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex gap-2">
              <button
                className="btn btn-sm bg-green-200 hover:bg-green-400 "
                onClick={() => console.log("Upvote button clicked")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                </svg>
                <p>{dataSetData.totalUpvotes}</p>
              </button>
              <button
                className="btn btn-sm bg-red-200 hover:bg-red-400"
                onClick={() => console.log("Downvote button clicked")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                </svg>
                <p>{dataSetData.totalDownvotes}</p>
              </button>
            </div>
            <div className="text-purple-900 font-semibold flex flex-col">
              <span>Owner</span>
              <span className=" text-gray-500 flex gap-1">
                {dataSetData.owner.slice(0, 6)}...{dataSetData.owner.slice(-4)}
                <ClipboardDocumentIcon className="w-6 h-6 hover:text-purple-500 hover:cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex justify-center pt-3">
            {buttonType === "owned" ? (
              <button className="btn btn-sm w-full rounded-full bg-purple-700 hover:bg-purple-900 text-white ">
                Download
              </button>
            ) : buttonType === "created" ? (
              <></>
            ) : (
              <button className="btn btn-sm w-full rounded-full bg-purple-700 hover:bg-purple-900 text-white">
                Buy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSetCard;
