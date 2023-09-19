import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-bgBlack'>
      <body>{children}</body>
    </html>
  )
}
