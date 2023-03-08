import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

// pages/_app.jsx
import Default from "../layouts/Default";
// import Layout2 from "@/layouts/Layout2";
const layouts = {
  Default: Default,
  // L2: Layout2,
};
const App = ({ Component, pageProps }) => {
 
  return (
    <Default>
      <Component {...pageProps} />
      
    </Default>
  );
};
export default App;