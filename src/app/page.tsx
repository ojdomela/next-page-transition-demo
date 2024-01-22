'use client'

import Button from '@/button'
import { PageTransition } from '@ojdom/next-page-transition'

export default function Home() {
  return (
    <>
      <PageTransition
        element="header"
        pageExitDuration={2}
        initial={{ height: 0 }}
        animate={{ height: '10vh' }}
        exit={{ height: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <Button label="Go to test page" href="test"/>
      </PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PageTransition
          element="aside"
          pageExitDuration={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', delay: 1.5, duration: 0.5 }}
        >
        <Button label="Go to test page" href="test"/>
        </PageTransition>
      </main>
    </>
  )
}
