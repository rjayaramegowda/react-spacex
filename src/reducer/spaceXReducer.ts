
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
    case "FILTER_BY_INPUT":
        return filterByInput(action.payload);  
  }
  return state;
}

function filterByInput(payload:any) {
  console.log("[SpaceXReducer] filterByInput");
  return voList.filter((vo:VO) => {
    
    if(vo.rocketName.toUpperCase().indexOf(payload.searchTxt.toUpperCase()) === -1) {
      return false;
    }

    if(payload.launchStatus !== "none") {
      let boo = payload.launchStatus === "success" ? true : false;
      if(boo !== vo.launchStatus) {
        return false;
      }
    }

    if(payload.isUpcoming !== "none") {
      let boo = payload.isUpcoming === "yes" ? true : false;
      if(boo !== vo.isUpcoming) {
        return false;
      }
    }

    if(payload.launchDate !== "none") {
      if(payload.launchDate === "year") {
        let lastYear = new Date((new Date().getFullYear() - 1).toString());
        if(lastYear.getTime() > new Date(vo.launchDate).getTime()) {
          return false;
        }
      }else if(payload.launchDate === "month") {
        let lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
         if(lastMonth.getTime() > new Date(vo.launchDate).getTime()) {
          return false;
        }
      }else if(payload.launchDate === "week") {
        let lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
         if(lastWeek.getTime() > new Date(vo.launchDate).getTime()) {
          return false;
         }
      }
    }

     return true;
    }
  );
}

export default SpaceXReducer;
