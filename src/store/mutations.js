import {UPDATE_USERINFOS} from './DefaultConstant'

export default {

  [UPDATE_USERINFOS](state, {userInfos}) {
    state.userInfos = []
    state.userInfos = userInfos
  }

}
