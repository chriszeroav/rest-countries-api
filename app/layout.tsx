import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts";
import { ChangeTheme } from "@/components/layout";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rest Countries Api",
  description: "Rest Countris Api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen grid grid-rows-[auto_1fr] bg-very-light-gray dark:bg-very-dark-blue-dm">
            <header className="px-5 shadow-md bg-white dark:bg-dark-blue">
              <div className="max-w-7xl mx-auto h-20 flex justify-between items-center">
                <h1 className="text-sm font-extrabold text-very-dark-blue-lm dark:text-white">
                  Where in the world?
                </h1>
                <ChangeTheme />
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
