import ThemeProviderWrapper from "@/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clickup",
  description: "This is a Clickup clone",
  viewport: "width=device-width, initial-scale=1",
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
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
