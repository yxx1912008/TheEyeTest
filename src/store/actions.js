import {UPDATE_USERINFOS, ADD_CHAT_BOX} from './DefaultConstant'

export default {

  // 更新用户列表信息
  updateUserInfos ({commit}, userInfos) {
    commit(UPDATE_USERINFOS, {userInfos})
  },
// 更新聊天界面聊天框的内容
  addChatBox ({commit}, chatMsg) {
    commit(ADD_CHAT_BOX, {chatMsg})
  }

}
