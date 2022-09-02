// Initial Data
const initialState = {
  selectedMails: []
}

// Types
const ADD_MAILS = 'ADD_MAILS'
//
export const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MAILS:
      return { ...state, ...action.payload }
    default:
      return { ...state }
  }
}

// Actions. Actions are going to be import to the Component/Page I need to call the action and call it with dispatch

export const fetchEmails = () => async () => {}

export const handleSelectedMail = (mails) => (dispatch, getState) => {
  // You should get mail to select from the action payload.
  const selectedMails = getState().selectedMails
  // filtering the mails

  if (!selectedMails.includes(mails)) {
    dispatch({
      type: ADD_MAILS,
      payload: mails
    })
  }
}
