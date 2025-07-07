import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './modules/shared/context/ThemeContext';
import Header from './modules/shared/components/Header';
import AppRoutes from './routes/Routes';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#1A1A1D] text-white">
          <Header />
          <main className="p-6">
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
