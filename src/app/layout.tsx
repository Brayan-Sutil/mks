export const metadata = {
  title: 'MKS-Sistemas',
  description: 'MKS-Sistemas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
