import "./globals.css";

const ogImageUrl =
  "http://static1.squarespace.com/static/670423e106da6c036366fd10/t/67239b1497e4e117adfdf764/1730386708141/Conejo+Valley+Family+Counseling+SS.png?format=1500w";

export const metadata = {
  metadataBase: new URL("https://www.conejovalleycounseling.com"),
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  alternates: {
    canonical: "https://www.conejovalleycounseling.com",
  },
  openGraph: {
    siteName: "Conejo Valley Family Counseling",
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
    description:
      "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
    url: "https://www.conejovalleycounseling.com",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1485,
        height: 1485,
        alt: "Conejo Valley Family Counseling",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
    description:
      "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
