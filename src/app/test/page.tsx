'use client'

import Button from '@/button'
import { PageTransition } from '@ojdom/next-page-transition'
import { motion } from 'framer-motion'

export default function TestPage() {
  return (
    <PageTransition
      element="div"
      pageExitDuration={5}
      className="flex min-h-screen flex-col items-center justify-between p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 1 }}}
      exit={{ opacity: 0, transition: { ease: 'easeInOut', delay: 5, duration: 0 }}}
    >
      {Array(5)
        .fill({})
        .map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit="exit"
            variants={{
              exit: (i) => ({
                opacity: 0,
                transition: {
                  delay:  4 - i,
                  duration: 1,
                },
              }),
            }}
          >
            <Button label='Test Page Button Label!' href="/" className="bg-gray-400" />
          </motion.div>
        ))}
    </PageTransition>
  )
}
