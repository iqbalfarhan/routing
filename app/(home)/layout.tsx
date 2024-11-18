export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' style={{ backgroundColor: '#000', color: '#fff' }}>
      <body>{children}</body>
    </html>
  );
}