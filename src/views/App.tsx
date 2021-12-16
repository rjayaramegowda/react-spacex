import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { VO } from "../reducer/spaceXReducer";

function mapStateToProps(state: any) {
  return {
    dataList: state.dataList,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addToCart: function (list: any) {
      dispatch({ type: "GET_SERVICE", payload: list });
    },
  };
}

type MyProp = {
  dataList: Array<VO>;
  addToCart: any;
};

class App extends React.Component<MyProp> {
  componentDidMount() {
    let that = this;
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then(function (response) {
        var a2 = response.data.map((item: any) => {
          let vo: VO = {
            rocketId: item.flight_number,
            rocketName: item.rocket.rocket_name,
            launchDate: item.launch_date_local,
            launchStatus: Boolean(item.launch_success),
            isUpcoming: Boolean(item.upcoming),
            pic: item.links.mission_patch_small,
            url: item.links.article_link,
            youtube: item.links.video_link,
          };
          return vo;
        });
        that.props.addToCart(a2);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {this.props.dataList.map((vo: VO, index: number): any => (
          <li key={index}>{vo.rocketName}</li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
