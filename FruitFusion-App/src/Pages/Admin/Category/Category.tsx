import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Profile</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">admin</a>
          </li>
          <li className="breadcrumb-item active text-white">Category</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            {/* Sidebar with links */}
            <div className="col-sm-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/admin/profile">Profile</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/order">Order</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/product">Product</Link>
                </li>
                <li className="list-group-item active">
                  <Link className="text-white" to="/admin/category">Category</Link>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button className="btn btn-danger w-50">Logout</button>
                </li>
              </ul>
            </div>

            {/* Table with title and Add Category button */}
            <div className="col-sm-9">
              {/* Table title and Add Category button */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Category List</h2>
                <Link to="/admin/category/add">
                  <button className="btn btn-primary">Add Category</button>
                </Link>
              </div>

              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cat 1</td>
                    <td>Cat 1</td>
                    <td>Active</td>
                    <td>
                      <button className="btn btn-dark">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category