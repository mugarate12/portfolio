import {
  Button
} from './../'

import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import styles from './FoundMe.module.css'

interface Props {
  id?: string
}

export default function FoundMe({
  id
}: Props) {
  return (
    <div
      id={id}
      className={styles.container}
    >
      <Button
        text=''
        type='icon'
        Icon={GitHubIcon}
        classNameIcon={styles.icon}
        onClick={() => window.open('https://github.com/mugarate12', '_blank')}
      />

      <Button
        text=''
        type='icon'
        Icon={InstagramIcon}
        classNameIcon={styles.icon}
        onClick={() => window.open('https://www.instagram.com/matt_cardosoo', '_blank')}
      />

      <Button
        text=''
        type='icon'
        Icon={LinkedInIcon}
        classNameIcon={styles.icon}
        onClick={() => window.open('https://www.linkedin.com/in/mateus-cardoso-dos-santos-19a68a181', '_blank')}
      />
    </div>
  )
}