import React from "react";
import DataSetCard from "~~/components/DataSetCard";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

const Marketplace = () => {
  return (
    <div>
      <Header />
      {/* My DataSets Heading */}
      <div className="flex justify-between">
        <h2 className="text-4xl text-white font-bold ml-10 mt-8">Explore All DataSets</h2>
        {/* Search Bar here */}
      </div>

      <div className=" text-white p-10 grid grid-cols-3 w-full">
        <DataSetCard dataSetName="Test 1" dataSetDescription="Test Description" buttonType="q" />
        <DataSetCard dataSetName="Test 2" dataSetDescription="Test Description" buttonType="marketplace" />
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
