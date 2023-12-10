"use client";

import React, { useEffect } from "react";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { useGlobalState } from "~~/services/store/store";

const Marketplace = () => {
  const dataSets = useGlobalState(state => state.dataSets);
  console.log("dataSets marketplace", dataSets);

  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(dataSets);
  }, [dataSets]);

  return (
    <div>
      <Header />
      {/* My DataSets Heading */}
      <div className="flex justify-between">
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Explore All DataSets</h2>
        {/* Search Bar here */}
      </div>

      <div className=" text-white p-10 grid grid-cols-3 w-full">
        {data &&
          data.map(dataSetAddress => (
            <DataSetCard
              key={1}
              dataSetName="Test 1"
              dataSetDescription="Test Description"
              dataSetAddress={dataSetAddress}
              buttonType="q"
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
