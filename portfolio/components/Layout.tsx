import Header_v2 from './Header_v2';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100vw; /* Full viewport width */
  max-height: 100vh; /* Full viewport height */
  overflow-x: hidden; /* Prevent horizontal scroll */
  `;




export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <Header_v2 />
            <main className="flex-grow">
            {children}
            </main>
    </PageContainer>
  );
}