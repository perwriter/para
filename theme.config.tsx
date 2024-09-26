import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: (
    <Image
      src='https://www.paramind.net/paralogo4.gif'
      alt='logo'
      width={100}  // Set appropriate width
      height={40}  // Set appropriate height
    />
  ),
  footer: {
    text: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src='https://www.paramind.net/paralogo4.gif'
          alt='logo'
          width={100}  // Same width as above
          height={40}  // Same height as above
        />
        <span style={{ marginLeft: '8px' }}>ParaMind - All rights reserved.</span>
      </div>
    ),
  },
}

export default config
