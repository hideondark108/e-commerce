import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Blocks } from '../../_components/Blocks'
import { HR } from '../../_components/HR'

import classes from './index.module.scss'

const Collections = ({ products }: { products: Page | null }) => {
  return (
    <div>
      <h3 className={classes.center}>New Collections</h3>
      <Blocks blocks={products?.layout} disableTopPadding={true} disableBottomPadding={true} />
      <HR />
    </div>
  )
}

export default Collections
