
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

let vo:VO = {rocketId: "", rocketName: "", launchDate: "", launchStatus: false, isUpcoming: false, pic:"", url: "", youtube:"" };

const voList: Array<VO> = [vo];

function SpaceXReducer(state: any = voList, action:any): any {
  switch(action.type) {
    case "GET_SERVICE":
      console.log('[SpaceXReducer] type = ', action.type );
      return [...action.payload];
  }
  return state;
}

export default SpaceXReducer;
