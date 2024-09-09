import styles from './HomePage.module.scss'
import ReactIcon from '@/assets/react.svg?react'

const HomePage = () => {
  return (
    <div className={styles.page}>
      <ReactIcon width={80} height={80} />
    </div>
  )
}

export default HomePage
