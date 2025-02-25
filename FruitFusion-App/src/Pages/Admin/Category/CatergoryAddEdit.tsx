/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const CatergoryAddEdit = () => {
  return (
    <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Category add</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Category</a>
          </li>
          <li className="breadcrumb-item active text-white">Category Add</li>
        </ol>
      </div>


      <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Category List</h2>
                <Link to="/admin/category">
                  <button className="btn btn-primary">Back</button>
                </Link>
              </div>
      <form>
        {/* Category Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleInputChange}
            required
          />
        </div>

        {/* Status Select */}
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            name="status"
            // value={formData.status}
            // onChange={handleInputChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
           
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>

    </div>
  )
}

export default CatergoryAddEdit