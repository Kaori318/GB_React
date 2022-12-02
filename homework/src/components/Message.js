import styles from './Message.module.css'

export function Message(props) {
  return(
    <div>
      <h1 className={styles.Message}>{props.title}</h1>
    </div>
  )
}
