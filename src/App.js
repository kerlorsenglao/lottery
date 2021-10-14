
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter} from 'react-router-dom';
// import MainLayout from './components/layout/Layout';
import Main_Layout from './MyAppPages/MainLayout/main_layout';

function App() {
    return (
        <BrowserRouter>
            {/* <MainLayout/> */}
            <Main_Layout/>
        </BrowserRouter>
        
    );
}

export default App;
