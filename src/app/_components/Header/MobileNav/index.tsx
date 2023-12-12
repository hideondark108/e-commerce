'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderMobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Image
        src={toggle ? './assets/icons/close.svg' : './assets/icons/menu.svg'}
        alt="menu"
        width={24}
        height={24}
        loading="lazy"
        onClick={() => setToggle(prev => !prev)}
      />
      <div className={`${toggle ? '' : [classes.hide]} ${classes.MobileNav}`}>
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="none" />
        })}
        {user && <Link href="/account">My Account</Link>}
        {!user && <Link href="/login">Login</Link>}
        {!user && <Link href="/create-account">Create Account</Link>}
        {user && <CartLink />}
      </div>
    </nav>
  )
}
