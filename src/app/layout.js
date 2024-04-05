import { Roboto  } from "next/font/google";
import "./globals.css";
import { ProfileProvider } from "../context/ProfileProvider";
import ToastProvider from "../context/ToastProvider";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ProfileProvider>
                    <ToastProvider>
                        <AntdRegistry>
                            {children}
                        </AntdRegistry>
                    </ToastProvider>
                </ProfileProvider>
            </body>
        </html>
    );
}
