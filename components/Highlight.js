import styles from '@tailwindcss/typography/src/styles'
import React from 'react'

export function Hil({ children, color }) {
  return <span className="rounded-[2px] bg-primary-700 p-1 text-white">{children}</span>
}
export function Ul({ children, color }) {
  return (
    <span className="rounded-[2px] p-1 text-white underline decoration-primary-500 decoration-2 underline-offset-4">
      {children}
    </span>
  )
}

export function Ref({ children, color }) {
  return <span className="rounded-[2px] p-1 text-primary-500">{children}</span>
}

export function Link({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="rounded-[2px] p-1 text-primary-500">
      {'link'}
    </a>
  )
}

export function Next({ next_page, prev_page }) {
  return (
    <div className="flex justify-around px-8 py-2">
      {prev_page && (
        <a href={prev_page} className="rounded-[2px] bg-gray-800 px-4 py-1 text-primary-500">
          {`PREV`}
        </a>
      )}
      {next_page && (
        <a href={next_page} className="rounded-[2px] bg-gray-800 px-4 py-1 text-primary-500">
          {`NEXT`}
        </a>
      )}
    </div>
  )
}
