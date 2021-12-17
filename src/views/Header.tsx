import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return {
    searchBy: function (searchTxt: string) {
      dispatch({ type: "SEARCH_BY_ROCKET_NAME", payload: searchTxt });
    },
  };
}

type MyProp = {
  searchBy: any;
};

class Header extends React.Component<MyProp> {
  constructor(props: any) {
    super(props);
    this.handleStatusDD = this.handleStatusDD.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleStatusDD() {
    console.log("this.handleStatusDD()");
  }

  handleSearch(e: any) {
    console.log("handleSearch() = ", e.target.value);
    this.props.searchBy(e.target.value.toUpperCase());
  }

  render() {
    return (
      <>
        <h1 className="mt-4 mb-3">React Test - SW Engineer</h1>
        <form className="row g-3 mb-4 d-flex align-items-center">
          <div className="col-12">
            <input
              onChange={(e) => this.handleSearch(e)}
              placeholder="Search By Rocket Name"
              className="form-control w-100 rounded-pill px-4"
            />
          </div>

          <div className="col-12 col-lg-auto">
            <label className="form-label">Filters </label>
          </div>

          <div className="col-auto">
            <label className="form-label">By Launch Date: </label>
          </div>
          <div className="col-auto">
            <select
              value={3}
              className="form-select"
              aria-label="Default select example"
              onChange={this.handleStatusDD}
            >
              <option value="3">Last Week</option>
              <option value="1">Last Month</option>
              <option value="2">Last Year</option>
            </select>
          </div>
          <div className="col-auto">
            <label className="form-label">By Launch Status: </label>
          </div>
          <div className="col-auto">
            <select
              value={3}
              className="form-select"
              aria-label="Default select example"
              onChange={this.handleStatusDD}
            >
              <option value="3">Success</option>
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
                onChange={this.handleStatusDD}
              />
              <label className="form-check-label">Is it upcoming</label>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
