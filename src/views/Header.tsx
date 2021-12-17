import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return {
    filterBy: function (payload: any) {
      console.log("line 11");
      dispatch({ type: "FILTER_BY_INPUT", payload });
    },
  };
}

type MyProp = {
  filterBy: any;
};

type MyState = {
  searchTxt: string;
  launchStatus: string;
  launchDate: string;
  isUpcoming: string;
};

class Header extends React.Component<MyProp, MyState> {
  constructor(props: any) {
    super(props);
    this.handleStatusDD = this.handleStatusDD.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLaunchDateDD = this.handleLaunchDateDD.bind(this);
    this.handleIsUpcomingToggle = this.handleIsUpcomingToggle.bind(this);
    this.state = {
      searchTxt: "",
      launchStatus: "none",
      launchDate: "none",
      isUpcoming: "none",
    };
  }

  handleLaunchDateDD(e: any) {
    console.log("this.handleStatusDD() = ", e.target.value);
    this.setState({ launchDate: e.target.value });
    this.props.filterBy(this.state);
  }

  handleStatusDD(e: any) {
    console.log("this.handleStatusDD() = ", e.target.value);
    this.setState({ launchStatus: e.target.value });
    this.props.filterBy(this.state);
  }

  handleIsUpcomingToggle(e: any) {
    console.log("this.handleStatusDD()= ", e.target.value);
    this.setState({ isUpcoming: e.target.value });
    this.props.filterBy(this.state);
  }

  handleSearch(e: any) {
    console.log("handleSearch() = ", e.target.value);
    this.setState({ searchTxt: e.target.value });
    this.props.filterBy({ ...this.state, searchTxt: e.target.value });
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
              value={this.state.searchTxt}
            />
          </div>

          <div className="col-12 col-lg-auto">
            <label className="form-label">Filters </label>
          </div>

          <div className="col-auto">
            <select
              value={this.state.launchDate}
              className="form-select"
              aria-label="Default select example"
              onChange={this.handleLaunchDateDD}
            >
              <option value="none">By Launch Date</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div>
          <div className="col-auto">
            <select
              value={this.state.launchStatus}
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => this.handleStatusDD(e)}
            >
              <option value="none">By Launch Status</option>
              <option value="success">Success</option>
              <option value="failure">Failure</option>
            </select>
          </div>

          <div className="col-auto">
            <select
              value={this.state.isUpcoming}
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => this.handleIsUpcomingToggle(e)}
            >
              <option value="none">Is it upcoming</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </form>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
