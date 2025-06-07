import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container py-4">
          <h1 className="text-2xl font-semibold text-gray-900">LegalTech CV</h1>
        </div>
      </header>
      <main className="container py-8">
        {children}
      </main>
    </div>
  );
}; 