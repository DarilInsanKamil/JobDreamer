import { Poppins, DM_Serif_Display } from "next/font/google"

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100','200','300','400','500','600','700','800','900'],
    variable: '--font-poppins',
})

export const dmserif = DM_Serif_Display({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-dmserif',
})