import {
  Text
} from './../../components'

import {
  DescriptionCard
} from './../'

import DevicesIcon from '@material-ui/icons/Devices'
import CodeIcon from '@material-ui/icons/Code'

import styles from './About.module.css'

interface Props {
  id?: string
}

export default function About({
  id
}: Props) {
  return (
    <div 
      id={id}
      className={styles.container}
    >
      <section className={styles.experience_container}>
        <Text
          text='3 +'
          type='title'
          className={styles.experience_text_title}
        />

        <Text
          text='Anos'
          type='sub_title'
          className={styles.experience_text}
        />

        <Text
          text='de'
          type='sub_title'
          className={styles.experience_text}
        />

        <Text
          text='experiência'
          type='sub_title'
          className={styles.experience_text}
        />
      </section>

      <section className={styles.content}>
        <DescriptionCard
          id='frontend_card'
          title='Front-end'
          Icon={DevicesIcon}
          description='Usando tecnologias mais recentes que atendam os requisitos do cliente, utilizando bons conceitos e práticas usando ReactJS/NextJS/Django'
        />

        <DescriptionCard
          id='backend_card'
          title='Back-end'
          Icon={CodeIcon}
          description="Trazendo boa bagagem pra estrutura da sua aplicação, API's REST, bons patterns e experiência com diversos bancos como MongoDB, Firebase, Mysql e testes automatizados pra trazer excelência sempre"
        />
      </section>
    </div>
  )
}