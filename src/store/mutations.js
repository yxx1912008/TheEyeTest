import {UPDATE_USERINFOS, ADD_CHAT_BOX} from './DefaultConstant'

export default {

  [UPDATE_USERINFOS] (state, {userInfos}) {
    state.userInfos = []
    state.userInfos = userInfos
  },
  [ADD_CHAT_BOX] (state, {chatMsg}) {
    state.chatList.push(chatMsg)
  }

}
