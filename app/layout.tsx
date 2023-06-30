// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'app-container'}>{children}</body>
    </html>
  );
}
