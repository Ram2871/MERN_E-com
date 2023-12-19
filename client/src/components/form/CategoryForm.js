import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-end justify-content-between">
          <div className="w-75">
            <small className="text-muted">Category Name <b className="text-danger">*</b></small>
            <input
              type="text"
              className="form-control"
              placeholder="Enter new category"
              value={value}
              required
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
