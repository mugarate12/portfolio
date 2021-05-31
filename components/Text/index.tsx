// title 36
// sub title 24
// paragrafo 16
// description 14
import classnames from 'classnames'

import styles from './Text.module.css'

interface Props {
  type: 'title' | 'sub_title' | 'simple_text' | 'description',
  text: string,
  className?: string
}

export default function Text({
  type,
  text,
  className
}: Props) {
  function renderText() {
    switch (type) {
      case 'title':
        return (
          <h2
            className={classnames(
              className,
              styles.default_text,
              styles.title
            )}
          >{ text }</h2>
        )
      case 'sub_title':
        return (
          <h4
            className={classnames(
              className,
              styles.default_text,
              styles.sub_title
            )}
          >{ text }</h4>
        )
      case 'description':
        return (
          <p
            className={classnames(
              className,
              styles.default_text,
              styles.description
            )}
          >{ text }</p>
        )
      default:
        return (
          <p
            className={classnames(
              className,
              styles.default_text,
              styles.paragraph
            )}
          >{ text }</p>
        )
    }
  }

  return (
    <>
      {renderText()}
    </>
  )
}