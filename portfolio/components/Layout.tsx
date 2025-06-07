import Header from './Header';
import Footer from './Footer';
import Header_v2 from './Header_v2';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
        <Header_v2 />
            <main className="flex-grow">
            {children}
            </main>
        <Footer />
    </div>
  );
}