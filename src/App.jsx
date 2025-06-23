import React from 'react'
import MainRouters from './pages'
import NetworkStatus from './components/network-status/NetworkStatus'

const App = () => {
  return (
    <>
      <NetworkStatus />
      <MainRouters />
    </>
  )
}

export default React.memo(App);