import React from 'react'
import MobileBar from '../MobileBar'
import './mainLayout.scss';

function MainLayout({ children }) {
  return (
    <>
      <section className="mainLayout">
        {children}
      </section>
      <MobileBar />
    </>
  )
}

export default MainLayout
