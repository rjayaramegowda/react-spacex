
type VO = {
  name: string
}

const voList: Array<VO> = [{name: 'Ravi'}];

function SpaceXReducer(state: any = voList): string {
  return state;
}

export default SpaceXReducer;
