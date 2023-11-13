import { MksProvider } from "./Context/MksProvider";
import QueryProvider from "./components/QueryProvider/QueryProvider";

export const metadata = {
  title: "MKS-Sistemas",
  description: "MKS-Sistemas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <MksProvider>{children}</MksProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
