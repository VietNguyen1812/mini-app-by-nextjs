'use client'
import React, { useState } from 'react'
import './Card.css'
import clsx from 'clsx'
import custom from './custom.module.scss' // css module
export default function Card() {
    const [expanding, setExpanding] = useState(false);      
  return (
    <div className={clsx('card' ,{
        [custom.card]: expanding,
    })}>Card</div> // import css module
  )
}
