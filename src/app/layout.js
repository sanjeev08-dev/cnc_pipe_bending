import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "CNC Pipe Bending Dashboard | FSM",
  description: "Mitsubishi CNC Pipe Bending Machine — Real-time monitoring dashboard by FSM Smart Manufacturing Simplified.",
  themeColor: "#1565C0",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1565C0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
