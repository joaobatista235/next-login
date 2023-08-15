import '../styles/globals.css'
import { Orelega_One } from 'next/font/google'
import StyledComponentsRegistry from './registry'

const font = Orelega_One({ subsets: ['latin'], weight: '400' })

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
