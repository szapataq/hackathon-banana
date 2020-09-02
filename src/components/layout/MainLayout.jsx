import React from 'react'
import MobileBar from '../MobileBar'

function MainLayout({ children }) {
  return (
    <>
      <div>
        {children}
      </div>
      <MobileBar />
    </>
  )
}

export default MainLayout
