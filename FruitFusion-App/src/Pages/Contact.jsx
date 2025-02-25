/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Contact</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Pages</a>
      </li>
      <li className="breadcrumb-item active text-white">Contact</li>
    </ol>
  </div>
  {/* Single Page Header End */}
    {/* Contact Start */}
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
                <h1 className="text-primary">Get in touch</h1>
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax &amp; PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.{" "}
                  <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="h-100 rounded">
              <iframe
                    title="GK2 Map"
                    className="rounded w-100"
                    style={{ height: 400 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224344.56317691595!2d77.20390307821788!3d28.53551693506127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e186122455%3A0xe98016d5f05e482a!2sGreater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048%2C%20India!5e0!3m2!1sen!2sin!4v1694259649153!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
             </div>
            </div>
            <div className="col-lg-7">
              <form action="" className="">
                <input
                  type="text"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                />
                <textarea
                  className="w-100 form-control border-0 mb-4"
                  rows={5}
                  cols={10}
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <button
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                <div>
                  <h4>Address</h4>
                  <p className="mb-2"> 504, Space Time Gk-2 New Delhi 110020</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <i className="fas fa-envelope fa-2x text-primary me-4" />
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-2">informfurites@gmail.com</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded bg-white">
                <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-2">7982464913</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
  </>
  
  )
}

export default Contact