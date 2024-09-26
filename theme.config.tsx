import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: <Image src='https://www.paramind.net/paralogo4.gif' alt='logo' width={120} height={40} />,
  footer: {
    text: (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '20px 40px', boxSizing: 'border-box' }}>
          {/* Logo on the left */}
          <div>
            <Image src='https://www.paramind.net/paralogo4.gif' alt='logo' width={120} height={40} />
          </div>

          {/* Links in the middle */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/more" passHref>
              <a style={{ margin: '0 10px' }}>More About ParaMind</a>
            </Link>
            <Link href="/theory" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind's Theory</a>
            </Link>
            <Link href="/examples" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind Examples</a>
            </Link>
            <Link href="/screenshots" passHref>
              <a style={{ margin: '0 10px' }}>Screen Shots</a>
            </Link>
            <Link href="/feedback" passHref>
              <a style={{ margin: '0 10px' }}>User Feedback</a>
            </Link>
            <Link href="/education" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind and Education</a>
            </Link>
            <Link href="/law" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind for Law</a>
            </Link>
            <Link href="/lite" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind Lite</a>
            </Link>
            <Link href="/professional" passHref>
              <a style={{ margin: '0 10px' }}>ParaMind Professional Version</a>
            </Link>
            <Link href="/links" passHref>
              <a style={{ margin: '0 10px' }}>Links</a>
            </Link>
          </div>

          {/* Order button on the right */}
          <div>
            <Link href="/order" passHref>
              <a
                className="btn-order"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f38a00',
                  color: 'white',
                  borderRadius: '5px',
                  textDecoration: 'none',
                }}
              >
                Order
              </a>
            </Link>
          </div>
        </div>
      </>
    ),
  },
}

export default config
