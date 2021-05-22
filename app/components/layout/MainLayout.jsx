import Header from "../modules/Header";
import Footer from "../modules/Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='py-10 md:py-12 lg:py-16'>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
