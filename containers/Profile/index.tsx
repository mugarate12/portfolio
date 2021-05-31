import Image from 'next/image'

import {
  Text
} from './../../components'

import {
  Button,
  Link
} from './../'

import styles from './Profile.module.css'

interface Props {
  id?: string
}

export default function Profile({
  id
}: Props) {
  return (
    <div
      id={id}
      className={styles.container}
    >
      <section className={styles.content_container}>
        <Text 
          text='/ Este sou eu'
          type='description'
          className={styles.description}
        />

        <Text
          text='Desenvolvedor fullstack tendo experiência em ReactJS, NextJS, NodeJs, Angular e Django, morando em Teotônio Vilela'
          type='sub_title'
          className={styles.title}
        />

        <Text
          text='Crio soluções e estudo boas práticas pra entregar o melhor'
          type='description'
          className={styles.description}
        />

        <Link
          text='Encontre-me'
          destination='https://www.linkedin.com/in/mateus-cardoso-dos-santos-19a68a181'
          target='_blank'
          className={styles.link_button_text}
        />
      </section>

      <section className={styles.img_container}>
        {/* <Image
          src="assets/images/profile.jfif"
          alt='profile image'
          className={styles.img}
          width={200}
          height={200}
        /> */}
        <img 
          src="/assets/images/profile.jfif" 
          alt="profile image"
          className={styles.img}
        />
      </section>
    </div>
  )
}