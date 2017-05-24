import React from 'react'
import Head from 'next/head'

export default ({ title = 'atfcAPI' }) => (
  <Head>
    <title>{ title }</title>
    <meta charSet='utf-8' />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" />
    <script src="//github.elemecdn.com/eleme/ubt-web/1.3.0/ubt.min.js" async></script>
  </Head>
)
