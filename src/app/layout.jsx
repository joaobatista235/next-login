import '../styles/globals.css'
import { Open_Sans } from 'next/font/google'
import StyledComponentsRegistry from './registry'

const font = Open_Sans({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'TGMEDICO',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
