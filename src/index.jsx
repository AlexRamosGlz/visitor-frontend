import App from "./App";
import {createRoot} from 'react-dom/client';
import './index.scss'
import Footer from "./footer/Footer.component";

const root = createRoot(document.getElementById('root'))

root.render(<div>
    <App/>
    <Footer />
</div>);
