import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state: any) {
  return {
    dataList: state.dataList,
  };
}

type VO = {
  name: string;
};

type MyProp = {
  dataList: Array<VO>;
};

class App extends React.Component<MyProp> {
  render() {
    return (
      <ul>
        {this.props.dataList.map((vo: VO, index: number): any => (
          <li key={index}>{vo.name}</li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(App);
