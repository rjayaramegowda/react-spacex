
export type VO = {
  rocketId: string,
  rocketName: string,
  launchDate: string,
  launchStatus: Boolean,
  isUpcoming:Boolean,
  pic:String,
  url:string,
  youtube:string
}

var voList: Array<VO> = [];

function SpaceXReducer(state: any = voList, action:any): any {
  switch(action.type) {
    case "GET_SERVICE":
     voList = [...action.payload];
     return [...action.payload];
    case "SEARCH_BY_ROCKET_NAME":
      return searchByRocketName(action.payload);    
  }
  return state;
}

function searchByRocketName(txt:string):any {
  return voList.filter((vo:any) => vo.rocketName.toUpperCase().indexOf(txt) !== -1)
}

export default SpaceXReducer;
