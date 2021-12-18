import React from "react";

function Home() {
  return (
    <>
      <h1 className="mt-4 mb-3">React Test - SW Engineer</h1>
      <form className="row g-3 mb-4 d-flex align-items-center">
        <div className="col-12">
          <input
            placeholder="Search By Rocket Name"
            className="form-control w-100"
          />
        </div>

        <div className="col-12 col-lg-auto">
          <label className="form-label">Filters </label>
        </div>

        <div className="col-auto">
          <label className="form-label">By Launch Date: </label>
        </div>
        <div className="col-auto">
          <select className="form-select" aria-label="Default select example">
            <option selected>Last Week</option>
            <option value="1">Last Month</option>
            <option value="2">Last Year</option>
          </select>
        </div>
        <div className="col-auto">
          <label className="form-label">By Launch Status: </label>
        </div>
        <div className="col-auto">
          <select className="form-select" aria-label="Default select example">
            <option selected>Success</option>
            <option value="1">Failure</option>
          </select>
        </div>

        <div className="col-auto">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked
            />
            <label className="form-check-label">Is it upcoming</label>
          </div>
        </div>
      </form>

      <div className="row row-cols-2 row-cols-lg-6 m-0">
        <div className="card border-0">
          <div>
            <img
              src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
