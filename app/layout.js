import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
<<<<<<< HEAD
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });
=======
>>>>>>> c4ce1f9 (Second time commit)


export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={outfit.className}>
        <ClerkProvider>
=======
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
>>>>>>> c4ce1f9 (Second time commit)
          <AppContextProvider>
            {children}
            <Toaster position="top-center" />
          </AppContextProvider>
<<<<<<< HEAD
        </ClerkProvider>
      </body>
    </html>
=======
        </body>
      </html>
      </ClerkProvider>
>>>>>>> c4ce1f9 (Second time commit)
  );
}


