import classnames from 'classnames'

import {
  Text
} from './../../components'

import styles from './Link.module.css'

interface Props {
  text: string,
  destination: string,
  target?: string,
  className?: string,
  classNameText?: string
}

export default function Link({
  text,
  destination,
  target,
  className,
  classNameText
}: Props) {
  return (
    <a 
      href={destination} 
      target={target}
      className={classnames(
        className
      )}
    >
      <Text
        type='simple_text'
        text={text}
        className={classnames(
          classNameText,
          styles.text
        )}
      />
    </a>
  );
}