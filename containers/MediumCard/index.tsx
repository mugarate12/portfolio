import {
  Text
} from './../../components'

import styles from './MediumCard.module.css'

interface Props {
  title: string,
  technologies: Array<string>,
  image: string,
  link: string
}

export default function MediumCard({
  title,
  technologies,
  image,
  link
}: Props) {
  function renderTechnologies() {
    return technologies.map((technology, index) => {
      return (
        <Text
          key={String(index)}
          text={technology}
          type='description'
          className={styles.description}
        />
      )
    })
  }

  return (
    <div 
      className={styles.container}
      onClick={() => {
        window.open(link, '_blank')
      }}
    >
      <img 
        src={image} 
        alt="medium thumbnail"
        className={styles.img} 
      />

      <Text
        text={title}
        type='sub_title'
        className={styles.title}
      />

      <section className={styles.techlonogies_container}>
        {renderTechnologies()}
      </section>
    </div>
  )
}