export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
          <title>Yannick Eich - Software Engineer</title>
          <meta name="description" content="Yannick Eich creates Fullstack Web Applications." />
      </head>
      <body>{children}</body>
    </html>
  )
}
