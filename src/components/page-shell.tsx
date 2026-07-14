import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ink text-white">{children}</main>
      <Footer />
    </>
  );
}
