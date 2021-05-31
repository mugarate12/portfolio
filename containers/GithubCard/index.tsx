import {
  useState,
  useEffect
} from 'react'

import {
  Text
} from './../../components'

import styles from './GithubCard.module.css'

interface Props {
  title: string,
  language: string,
  link: string
}

export default function GithubCard({
  title,
  language,
  link
}: Props) {
  return (
    <div 
      className={styles.container}
      onClick={() => {
        window.open(link, '_blank')
      }}
    >
      <Text
        type='sub_title'
        text={title}
      />

      <Text
        type='description'
        text={language}
        className={styles.description}
      />
    </div>
  )
}