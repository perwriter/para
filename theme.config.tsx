import React, { useState } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: <Image src='https://www.paramind.net/paralogo4.gif' alt='logo' width={120} height={40} />,
  footer: {
    text: (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '20px 40px',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo on the left */}
          <div>
            <Image src='https://www.paramind.net/paralogo4.gif' alt='logo' width={120} height={40} />
          </div>

          {/* Dropdown for Links in Mobile */}
          <div className="links-dropdown" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Dropdown />
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

        <style jsx>{`
          /* Styling for mobile responsiveness */
          @media (max-width: 768px) {
            .links-dropdown {
              flex-direction: column;
              align-items: center;
            }

            .btn-order {
              margin-top: 10px;
            }
          }
        `}</style>
      </>
    ),
  },
}

// Dropdown component for mobile links
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Dropdown Toggle Button */}
      <button
        style={{
          background: 'transparent',
          border: '1px solid #ccc',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Dropdown Links */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
          }}
        >
          <div style={{ padding: '10px 20px', textAlign: 'center' }}>
            <Link href="/more" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>More About ParaMind</a>
            </Link>
            <Link href="/theory" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>ParaMind's Theory</a>
            </Link>
            <Link href="/examples" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>ParaMind Examples</a>
            </Link>
            <Link href="/screenshots" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>Screen Shots</a>
            </Link>
            <Link href="/feedback" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>User Feedback</a>
            </Link>
            <Link href="/education" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>ParaMind and Education</a>
            </Link>
            <Link href="/law" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>ParaMind for Law</a>
            </Link>
            <Link href="/lite" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>ParaMind Lite</a>
            </Link>
            <Link href="/professional" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>ParaMind Professional Version</a>
            </Link>
            <Link href="/links" passHref>
              <a style={{ display: 'block', padding: '10px 0' }}>Links</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default config
