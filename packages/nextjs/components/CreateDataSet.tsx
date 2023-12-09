import React from "react";

interface CreateDataSetProps {
  dataSetName: string;
  dataSetDescription: string;
  price: number;
  file: File;
}

const CreateDataSet = () => {
  const [formData, setFormData] = React.useState({
    dataSetName: "",
    dataSetDescription: "",
    price: 0,
    file: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(formData);
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
                value={formData.file}
                onChange={handleChange}
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
