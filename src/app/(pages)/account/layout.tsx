'use client'
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Gutter } from '../../_components/Gutter'
import { profileNavItems } from '../../constants/'
import { UserInfo } from './UserInfo'

import classes from './index.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>My Profile</h3>
        <div className={classes.account}>
          <div className={classes.nav}>
            <UserInfo />

            <ul className={classes.nav}>
              {profileNavItems.map(item => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className={clsx(classes.navItem, {
                      [classes.itemActive]: pathname === item.url,
                    })}
                  >
                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {children}
        </div>
      </Gutter>
    </div>
  )
}
