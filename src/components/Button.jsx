import React from 'react'
import './button.scss'

function Button({ children, ...rest }) {
  return (
    <button {...rest}>
      {children}
    </button>
  )
}

export default Button
