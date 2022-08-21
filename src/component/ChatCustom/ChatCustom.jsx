/* eslint-disable prettier/prettier */
import SendBirdApp from '@sendbird/uikit-react/App'
import '@sendbird/uikit-react/dist/index.css'
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext'
import { Loading } from '../Loading/Loading'

export const ChatCustom = () => {
  const { config } = useSendbirdStateContext()
  console.log(useSendbirdStateContext())
  config.appId = process.env.REACT_APP_APP_ID
  config.userId = process.env.REACT_APP_USER_ID
  return config.userId !== null ? (
    <div style={{ height: '80vh', width: '80vw' }}>
      <SendBirdApp
        appId={`${process.env.REACT_APP_APP_ID}`}
        userId={`${process.env.REACT_APP_USER_ID}`}
        showSearchIcon
        channelUrl='sendbird_open_channel_111732_ca0f264f39ea9fd0457fe59e62711f12e13da2e8'
        replyType='QUOTE_REPLY'
        isMentionEnabled
        isReactionEnabled
        isTypingIndicatorEnabledOnChannelList
        isMessageReceiptStatusEnabledOnChannelList
        imageCompression={{
          compressionRate: 0.5,
          resizingWidth: 100,
          resizingHeight: '100px'
        }}
      />
    </div>
  ) : (
    <Loading />
  )
}
