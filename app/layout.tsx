
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={``}>
      <body>{children}</body>
    </html>
  );
}
