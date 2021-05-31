import {
  useState,
  useEffect
} from 'react'

import {
  Text
} from './../../components'

import {
  Button,
  GithubCard
} from './../'

import styles from './GitHubPosts.module.css'

interface repositoriesInterface {
  name: string,
  html_url: string,
  language: string
}

interface Props {
  id?: string
}

export default function GitHubPosts({
  id
}: Props) {
  const [repositories, setRepositories] = useState<Array<repositoriesInterface>>([])

  async function getRepositories() {
    await fetch('https://api.github.com/users/mugarate12/repos?sort=updated&&per_page=5')
      .then(async (response) => {
        const data = await response.json()

        setRepositories(data)
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    getRepositories()
  }, [])

  function renderRepositories() {
    return repositories.map((repository, index) => {
      return (
        <GithubCard
          key={String(index)}
          title={repository.name}
          language={repository.language}
          link={repository.html_url}
        />
      )
    })
  }

  return (
    <div
      id={id}
      className={styles.container}
    >
      <Text 
        type='sub_title'
        text='Minha atividade no Github'
      />

      <section className={styles.cards_container}>
        {renderRepositories()}
      </section>

      <Button
        text='Ver todos'
        type='normal'
        className={styles.button}
        onClick={() => {
          window.open('https://github.com/mugarate12?tab=repositories', '_blank')
        }}
      />
    </div>
  )
}