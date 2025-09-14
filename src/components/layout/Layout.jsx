import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="main-content flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;