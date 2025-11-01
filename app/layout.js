export const metadata = {
  title: 'Student Learning Portal - Your Gateway to Knowledge',
  description: 'Comprehensive learning resources for students across all subjects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
