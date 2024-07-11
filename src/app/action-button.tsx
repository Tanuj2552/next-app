import React, { MouseEventHandler } from 'react'

export default function ActionButton({text, onAction}: {text:string, onAction: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <button onClick={onAction}>
        <span>{text}</span>
    </button>
  )
}
