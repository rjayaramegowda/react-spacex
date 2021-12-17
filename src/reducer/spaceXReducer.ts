
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
    case "FILTER_BY_INPUT":
        return filterByInput(action.payload);  
  }
  return state;
}

function searchByRocketName(txt:string):any {
  return voList.filter((vo:VO) => vo.rocketName.toUpperCase().indexOf(txt) !== -1)
}

function filterByInput(payload:any) {
  console.log("[SpaceXReducer] filterByInput");
  return voList.filter((vo:VO) => vo.rocketName.toUpperCase().indexOf(payload.searchTxt) !== -1);
}

export default SpaceXReducer;
