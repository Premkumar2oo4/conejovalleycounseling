import "./globals.css";

export const metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description: "Counseling for adults, couples, and children in Newbury Park, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
