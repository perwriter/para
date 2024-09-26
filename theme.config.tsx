
import React, { useState } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Link from 'next/link'

// Dropdown component for mobile view
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
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

      {/* Dropdown Links (Opening Upwards) */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%', // Moves dropdown above button
            left: '0',
            width: '200px', // Default width
            backgroundColor: '#fff',
            boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            maxWidth: '90vw', // Makes the dropdown take most of the screen on mobile
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

          {/* Links in the middle for larger screens */}
          <div className="footer-links" style={{ display: 'none', flexWrap: 'wrap', justifyContent: 'center' }}>
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
          @media (min-width: 768px) {
            .footer-links {
              display: flex !important;
            }
            .links-dropdown {
              display: none !important;
            }
          }
        `}</style>
      </>
    ),
  },
}

export default config

