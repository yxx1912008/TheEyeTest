import {UPDATE_USERINFOS} from './DefaultConstant'

export default {

  // 更新用户列表信息
  updateUserInfos({commit}, userInfos) {
    commit(UPDATE_USERINFOS, {userInfos})
  }

}
