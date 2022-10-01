import { Routers } from "./routers";

import { Navbar } from "./shared/components/Navbar";
import { Footer } from "./shared/components/Footer";
import ScrollToTop from "./shared/utils/ScrollToTop";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routers />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
