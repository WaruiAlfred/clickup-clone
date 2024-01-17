// import ThemeProviderWrapper from "@/ThemeProviderWrapper";

import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Clickup",
  description: "This is a Clickup clone",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProviderWrapper>{children}</ThemeProviderWrapper> */}
        {children}
      </body>
    </html>
  );
}
