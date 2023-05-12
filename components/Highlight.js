import React from 'react'

export function Hil({ children }) {
  return <span className="rounded-[2px] bg-primary-700 p-1 text-white">{children}</span>
}
export function Ul({ children }) {
  return (
    <span className="rounded-[2px] p-1 underline decoration-primary-500 decoration-2 underline-offset-4 dark:text-white">
      {children}
    </span>
  )
}

export function Ref({ children, color }) {
  return <span className="rounded-[2px] p-1 font-semibold text-primary-600">{children}</span>
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
    <>
      <br />
      <div className="flex justify-around px-8 py-2">
        {prev_page && (
          <a
            href={prev_page.href}
            className="rounded-[2px] bg-gray-100 px-4 py-1 text-primary-500 dark:bg-gray-800"
          >
            {`Previous: ${prev_page.label}`}
          </a>
        )}
        {next_page && (
          <a
            href={next_page.href}
            className="rounded-[2px] bg-gray-100 px-4 py-1 text-primary-500 dark:bg-gray-800"
          >
            {`Next: ${next_page.label}`}
          </a>
        )}
      </div>
    </>
  )
}
