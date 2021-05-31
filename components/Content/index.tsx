import styles from './Content.module.css'

export default function Content({
  children
}) {
  return (
    <div className={styles.container}>
      { children }
    </div>
  )
}