import "@/app/globals.css"

export const metadata = {
  title: 'Sanity Studio',
  description: 'Backend management for Dari Elan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, backgroundColor: '#ffffff' }} className="bg-white">
        {children}
      </body>
    </html>
  )
}

