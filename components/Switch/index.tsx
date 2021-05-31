import {
  useState
} from 'react'

import {
  Switch
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import styles from './Switch.module.css'

interface Props {
  checked: boolean,
  onChange?: Function
}

export default function CustomSwitch({
  checked,
  onChange
}: Props) {
  return (
    <section className={styles.container}>
      <Switch
        checked={checked}
        onChange={() => onChange()}
        // classes={{
        //   // root: classes.root
        //   switchBase: classes.switchBase
        // }}
      />
    </section>
  )
}