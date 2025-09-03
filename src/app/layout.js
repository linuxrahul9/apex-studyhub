import "./globals.css";
import Footer from "./components/Footter"; // Add this component to your layout

export const metadata = {
  title: "Study Hub",
  description: "A beautiful study hub for students",
};

export default function RootLayout({ children }) {
  return (<>
    <html lang="en">
    <body>
    <main className="">{children}</main>
    <Footer />
    </body>
    </html>
  </>
  );
}