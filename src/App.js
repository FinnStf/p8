import './App.css';
import Header from "./components/layout/Header";
import ViewportProvider from "./store/ViewportProvider";
import FirstPanel from "./components/panels/FirstPanel";
import SecondPanel from "./components/panels/SecondPanel";
import ThirdPanel from "./components/panels/ThirdPanel";
import FourthPanel from "./components/panels/FourthPanel";
import FloatingButton from './components/ui/FloatingButton'
import Footer from './components/layout/Footer'

function App() {
    return (
        <ViewportProvider>
            <div className="App">
                <Header/>
                <main>
                    <FirstPanel/>
                    <SecondPanel/>
                    <ThirdPanel/>
                    <FourthPanel/>
                    <FloatingButton/>
                </main>
                <Footer/>
            </div>
        </ViewportProvider>
    );
}

export default App;
