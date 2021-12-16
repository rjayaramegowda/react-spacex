import React from 'react';

const Header = () => {
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
        </>
    );
};

export default Header;