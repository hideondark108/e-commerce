'use client'

import React, { useEffect, useState } from 'react'
import { Autour_One } from 'next/font/google'
import Image from 'next/image'

import { Button } from '../Button'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  function calculateRemainingTime() {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateRemainingTime())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>
        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Mins" value={time.minutes} />
          <StatBox label="Sec" value={time.seconds} />
        </ul>
        <Button className={classes.button} href="/products">
          View Product
          <Image
            src="./assets/icons/arrow-narrow-right.svg"
            alt="delete"
            width={24}
            height={24}
            className={classes.qtnBt}
          />
        </Button>
      </div>
      <Image
        src="./assets/images/image-4.svg"
        alt="image4"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }} // optional
      />
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
