import React from 'react'
// import configureStore from 'redux-mock-store'
// import thunkMiddleware from 'redux-thunk'

// import { Provider } from 'react-redux'
// import { RootState } from 'modules'
// import { initialState } from 'modules'
// import { library } from '@fortawesome/fontawesome-svg-core'

// library.add(fab, fas)

// export default function StorybookProvider({
//   story,
//   state: stateProp
// }: {
//   story: React.ReactChild | (() => React.ReactChild)
//   state?: RootState | (() => RootState)
// }) {
//   const children = typeof story === 'function' ? story() : story

//   const mockStore = configureStore([thunkMiddleware])
//   const state = {
//     ...initialState,
//     ...(typeof stateProp === 'function' ? stateProp() : stateProp)
//   }
//   const store = mockStore(state)

//   return (
//     <Provider store={store} key={Math.random()}>
//       {children}
//     </Provider>
//   )
// }

export default function Provider() {
  return <div />
}
