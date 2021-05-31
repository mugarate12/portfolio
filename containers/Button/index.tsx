import {
  CSSProperties
} from 'react'
import classnames from 'classnames'

import {
  Text
} from './../../components'

import styles from './Button.module.css'

interface Props {
  type: 'normal' | 'icon' | 'text',
  text: string,
  className?: string,
  classNameText?: string,
  classNameIcon?: string,
  disabled?: boolean
  onClick?: Function,
  Icon?: any
  IconHeight?: number,
  IconWidth?: number,
  style?: CSSProperties
}

export default function Button({
  type,
  text,
  className,
  classNameText,
  classNameIcon,
  disabled,
  onClick,
  Icon,
  IconHeight,
  IconWidth,
  style
}: Props) {
  function renderIcon() {
    const isHaveIcon = !!Icon
    
    if (isHaveIcon) {
      return (
        <Icon
          style={{
            height: '15px',
            width: '15px'
          }}
          className={classnames(
            classNameIcon
          )}
        />
      )
    }
  }
  
  function defaultButton() {
    return (
      <button 
        className={classnames(
          className,
          styles.btn,
          styles.default_btn
        )}
        style={style}
        disabled={!!disabled ? disabled : false}
        onClick={() => !!onClick ? onClick() : {}}
      >
        {renderIcon()}
        
        <Text
          text={text}
          type='simple_text'
          className={classnames(
            classNameText,
            styles.default_btn_text
          )}
        />
      </button>
    )
  }

  function textButton() {
    return (
      <button
        className={classnames(
          styles.btn,
          styles.text_btn
        )}
        style={style}
        disabled={!!disabled ? disabled : false}
        onClick={(e) => !!onClick ? onClick(e) : {}}
      >
        <Text 
          text={text}
          type='simple_text'
          className={styles.text_btn_text}
        />
      </button>
    )
  }

  function iconButton() {
    return (
      <button 
        className={classnames(
          className,
          styles.btn,
          styles.icon_btn
        )}
        style={style}
        disabled={!!disabled ? disabled : false}
        onClick={(e) => !!onClick ? onClick(e) : {}}
      >
        <Icon
          style={{
            height: !!IconHeight ? `${IconHeight}px` : '40px',
            width: !!IconWidth ? `${IconWidth}px` : '40px'
          }}
          className={classnames(
            classNameIcon
          )}
        />
      </button>
    )
  }

  function renderButton() {
    if (type === 'normal') {
      return defaultButton()
    } else if (type === 'text') {
      return textButton()
    } else {
      return iconButton()
    }
  }

  return (
    <>
      {renderButton()}
    </>
  )
}