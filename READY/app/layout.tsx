// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good News - Positive News Platform',
  description: 'Aggregating positive news from around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
