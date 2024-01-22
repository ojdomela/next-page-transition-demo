import { usePageTransition } from '@ojdom/next-page-transition'

export default function Button({
  href,
  label,
  className,
}: {
  href: string
  label: string
  className?: string
}) {
  const { startTransition } = usePageTransition()
  return (
    <button className={className} onClick={() => startTransition(href)}>
      {label}
    </button>
  )
}
