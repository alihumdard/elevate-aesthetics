export const metadata = {
  title: "Elevate Aesthetics — Laser Hair Removal",
  description: "Advanced laser hair removal for long-lasting results.",
};
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
