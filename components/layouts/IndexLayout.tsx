import { Providers } from "@/app/providers";
import { Analytics } from "@/components/Analytics";
import '../../app/styles/fonts.css';

export const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
