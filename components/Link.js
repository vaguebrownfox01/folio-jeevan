/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link className="no-underline" href={href}>
        <a className="no-underline" {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a className="no-underline" href={href} {...rest} />
  }

  return (
    <a target="_blank" rel="noopener noreferrer" className="no-underline" href={href} {...rest} />
  )
}

export default CustomLink
