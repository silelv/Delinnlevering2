
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
