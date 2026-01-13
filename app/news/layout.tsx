export const metadata = {
  title: 'News & Updates | Muga Rescue Care',
  description: 'Latest rescue stories, community impact updates, and announcements from Muga Rescue Care.',
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>{children}</section>
  )
}