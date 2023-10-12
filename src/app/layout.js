import './globals.css'
import { poppins } from './fonts/font'
import { VacancyProvider } from './context';
import { Footer } from '@/components';
import { NavigationBar } from '@/components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <VacancyProvider>
          <NavigationBar />
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
