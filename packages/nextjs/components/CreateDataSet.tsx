import React from "react";
import lighthouse from "@lighthouse-web3/sdk";

const CreateDataSet = () => {
  const [formData, setFormData] = React.useState({
    dataSetName: "",
    dataSetDescription: "",
    price: 0,
    file: "",
  });

  // const handleFileReader = () => {
  //   // make a promise that resolves when the file is read
  //   const reader = new FileReader();
  //   reader.readAsDataURL(formData.file as any);
  //   return new Promise((resolve, reject) => {
  //     reader.onload = e => {
  //       resolve(e.target?.result || null);
  //     };
  //     reader.onerror = reject;
  //   });

  //   // reader.onload = e => {
  //   //   setFormData(
  //   //     prev =>
  //   //       ({
  //   //         ...prev,
  //   //         file: e.target?.result || null,
  //   //       } as any),
  //   //   );
  //   // };
  // };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleInputZipChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const file = event.target.files[0];
    setFormData(
      prev =>
        ({
          ...prev,
          file: file,
        } as any),
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form entered!");
    // console.log(process.env.NEXT_PUBLIC_LIGHTHOUSE_API_KEY);
    const API_KEY = process.env.NEXT_PUBLIC_LIGHTHOUSE_API_KEY?.toString() || "";

    // const fileData = await handleFileReader();
    // console.log(fileData);

    console.log(formData.file, API_KEY);

    const uploadResponse = await lighthouse.upload(formData.file, API_KEY);
    console.log(uploadResponse);
    console.log("Visit at https://gateway.lighthouse.storage/ipfs/" + uploadResponse.data.Hash);

    setFormData({
      dataSetName: "",
      dataSetDescription: "",
      price: 0,
      file: "",
    });
  }

  return (
    <div>
      <dialog id="create_dataset_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Create a Dataset</h3>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">DataSet Name</span>
              </div>
              <input
                value={formData.dataSetName}
                onChange={handleChange}
                name="dataSetName"
                type="text"
                placeholder="Type Dataset name"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">DataSet Description</span>
              </div>
              <input
                type="text"
                value={formData.dataSetDescription}
                onChange={handleChange}
                name="dataSetDescription"
                placeholder="Type Dataset description"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price (in ETH)</span>
              </div>
              <input
                value={formData.price}
                onChange={handleChange}
                name="price"
                type="number"
                placeholder="Enter Price"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Choose DataSet zip to Upload</span>
              </div>
              <input
                name="file"
                onChange={handleInputZipChange}
                type="file"
                accept=".zip"
                className="file-input file-input-bordered w-full"
                required
              />
            </label>
            <button className="btn w-full bg-slate-200 mt-4 hover:bg-slate-300">Create dataset</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CreateDataSet;
