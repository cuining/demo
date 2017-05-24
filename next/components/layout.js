import React from 'react'
import Head from './head'
import Navbar from './navbar'

export default ({ children }) => (
  <div>
    <Head />
    <Navbar />
    <main>
      { children }
    </main>
    <style>{`
      main {
        padding: 0 50px;
      }
      .navbar {
        border-radius: 0;
      }
    `}</style>
  </div>
)
