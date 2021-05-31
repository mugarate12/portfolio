import {
  MouseEvent
} from 'react'

import {
  Text
} from './../../components'

import styles from './DescriptionCard.module.css'

interface Props {
  id: string,
  title: string,
  Icon: any,
  description: string
}

export default function DescriptionCard({
  id,
  title,
  Icon,
  description
}: Props) {
  function hoverEffect(x: number, y: number, card: HTMLElement) {
    const itemWidth = card.clientWidth
    const itemHeight = card.clientHeight
    
    const xPos = (x - (itemWidth / 2)) / 30
		const yPos = (y - (itemHeight / 2)) / 30

    var rotateX = Math.round(- (yPos * 3))
		var rotateY = Math.round(+ (xPos * 6))

    card.style.cursor = 'pointer'
    card.style.transition = 'all 0s linear'
    card.style.transform = 'scale(1.0) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
    card.style.boxShadow = - Math.round((x - itemWidth / 2) / 10) + 'px ' + Math.round(- (y - itemHeight / 2) / 10) + 'px 10px -5px rgba(0,0,0,0.7)'
  }

  function moveMouseEffect(mouseEvent: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, cardID: string) {
    const card = document.getElementById(cardID)
    
    if (!!card) {
      const relX = mouseEvent.clientX - card.offsetLeft
      const relY = mouseEvent.pageY - card.offsetTop

      hoverEffect(relX, relY, card)
    }
  }

  function leaveMouseEffect(cardID: string) {
    const card = document.getElementById(cardID)

    if (!!card) {
      card.style.transition = 'all 0.6s ease-in-out'
      card.style.transform = 'rotate(0deg)'
      card.style.zIndex = '0'
      card.style.boxShadow = '0px 0px 0px -5px rgba(0,0,0,0.8)'
    }
  }


  return (
    <div
      id={id}
      className={styles.container}
      onMouseMove={(event) => moveMouseEffect(event, id)}
      onMouseLeave={(event) => leaveMouseEffect(id)}
    >
      <section className={styles.header}>
        <Text 
          text={title}
          type='sub_title'
        />

        <Icon 
          style={{
            color: 'green'
          }}
        />
      </section>

      <Text
        text={description}
        type='description'
        className={styles.description}
      />
    </div>
  )
}