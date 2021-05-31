import Image from 'next/image'
import {
  useState
} from 'react'

import {
  Switch
} from './../../components'

import {
  Button,
  Link
} from './../'

import {
  useThemeContext
} from './../../context/theme'

import styles from './Header.module.css'

export default function Header() {
  const {
    setTheme
  } = useThemeContext()

  const [themeSwitchChecked, setThemeSwitchChecked] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <section className={styles.main_content}>
        <Image
          src='/assets/images/logo_dark.png'
          alt='logo image'
          height={30}
          width={70}
          layout='fixed'
        />

        <Link 
          destination='#Profile'
          text='Sobre mim'
          classNameText={styles.link_text}
        />

        <Link 
          destination='#FoundMe'
          text='Redes'
          classNameText={styles.link_text}
        />

        <Link 
          destination='#About'
          text='Experiência'
          classNameText={styles.link_text}
        />

        <Link 
          destination='#Medium'
          text='Medium'
          classNameText={styles.link_text}
        />

        <Link 
          destination='#Github'
          text='Github'
          classNameText={styles.link_text}
        />
      </section>
      

      <Switch 
        checked={themeSwitchChecked}
        onChange={() => {
          if (themeSwitchChecked) {
            setTheme('light')
            setThemeSwitchChecked(false)
          } else {
            setTheme('dark')
            setThemeSwitchChecked(true)
          }
        }}
      />
    </div>
  )
}