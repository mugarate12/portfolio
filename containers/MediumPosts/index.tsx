import {
  useState,
  useEffect
} from 'react'

import {
  Text
} from './../../components'

import {
  Button,
  MediumCard
} from './../'

import styles from './MediumPosts.module.css'

interface MediumPostInterface {
  title: string,
  categories: Array<string>,
  thumbnail: string,
  link: string
}

interface Props {
  id?: string
}

export default function MediumPosts({
  id
}: Props) {
  const [posts, setPòsts] = useState<Array<MediumPostInterface>>([])

  async function getPosts() {
    await fetch('https://api.rss2json.com/v1/api.json?%20%20%20rss_url=https://medium.com/feed/@serjumano17')
      .then(async (response) => {
        const data = await response.json()
        
        setPòsts(data.items)
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  function renderCards() {
    return posts.map((mediumPost, index) => {
      return (
        <MediumCard
          key={String(index)}
          title={mediumPost.title}
          image={mediumPost.thumbnail}
          technologies={mediumPost.categories}
          link={mediumPost.link}
        />
      )
    })
  }

  return (
    <div className={styles.container}>
      <Text 
        type='sub_title'
        text='Minha atividade no Medium'
      />

      <section className={styles.cards_container}>
        {renderCards()}
      </section>

      <Button
        text='Ver todos'
        type='normal'
        className={styles.button}
        onClick={() => {
          window.open('https://serjumano17.medium.com', '_blank')
        }}
      />
    </div>
  )
}