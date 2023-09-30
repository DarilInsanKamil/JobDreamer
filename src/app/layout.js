import './globals.css'
import { poppins } from './fonts/font'
import { VacancyProvider } from './context';
import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Job Dreamer',
  description: 'aplikasi pencari kerjaa',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <VacancyProvider>
          {/* <nav className="navbar">
            <Navbar />
          </nav> */}
          <main>
            {children}
          </main>
          <footer className='footer'>
            <Footer />
          </footer>
        </VacancyProvider>
      </body>
    </html>
  )
}
