import Image from 'next/image'
import React from 'react'

export function Hil({ children }) {
  return (
    <span className="mb-1 rounded-[2px] bg-primary-700 p-1 font-semibold text-white">
      {children}
    </span>
  )
}
export function Ul({ children }) {
  return (
    <span className="p-1 underline decoration-primary-500 decoration-2 underline-offset-4 dark:text-white">
      {children}
    </span>
  )
}

export function Ref({ children, color }) {
  return <span className=" p-1 font-semibold text-primary-600">{children}</span>
}

export function Link({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className=" p-1 text-primary-500">
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

export function MdFig({ width, height, src, desc }) {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Image alt={desc} {...{ width, height, src }} />
      <span className="p-2 font-semibold">{desc}</span>
    </div>
  )
}
