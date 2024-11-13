import React from 'react'

import './ButtonCta.css';

interface ButtonCtaProps{
    primary?: boolean
    children: React.ReactNode;
}

const ButtonCta = (props: ButtonCtaProps) => {
  return (
    <button className={`cta-btn primary ${props.primary ? 'primary' : 'secondary'}`}>
      {props.children}
    </button>
  )
}

export default ButtonCta