import React from 'react'
import MobileBar from '../MobileBar'

function MainLayout({ children }) {
  return (
    <div>
      <MobileBar>
        {children}
      </MobileBar>
    </div>
  )
}

export default MainLayout
