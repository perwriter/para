import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: <Image src='https://www.paramind.net/paralogo4.gif' alt='logo' width={120} height={40} />,
  footer: {
    text: (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src='https://www.paramind.net/paralogo4.gif' alt='logo' width={120} height={40} />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <Link href="/more-about-paramind" passHref>
              <a style={{ margin: '0 10px' }}>More About ParaMind</a>
            </Link>
            <Link href="/paraminds-theory" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind's Theory</a>
            </Link>
            <Link href="/paramind-examples" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind Examples</a>
            </Link>
            <Link href="/screenshots" passHref>
              <a style={{ margin: '0 10px' }}>Screen Shots</a>
            </Link>
            <Link href="/user-feedback" passHref>
              <a style={{ margin: '0 10px' }}>User Feedback</a>
            </Link>
            <Link href="/paramind-education" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind and Education</a>
            </Link>
            <Link href="/paramind-law" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind for Law</a>
            </Link>
            <Link href="/paramind-lite" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind Lite</a>
            </Link>
            <Link href="/paramind-professional" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind Professional Version</a>
            </Link>
            <Link href="/links" passHref>
              <a style={{ margin: '0 10px' }}>Links</a>
            </Link>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <Link href="/order" passHref>
              <a className="btn-order" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px' }}>
                Order ParaMind
              </a>
            </Link>
          </div>
        </div>
      </>
    ),
  },
}

export default config
