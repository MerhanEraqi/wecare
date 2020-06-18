import React from 'react';
import './App.css';
import HomeView from './component/homeView';
import NavBar from './layout/navBar';
import Footer from './layout/footer';

class App extends React.Component {
    render() {
        return (
            <div className="app" data-spy="scroll" data-target="#nav">
                <NavBar />
                <HomeView />
            </div>);
    }
}

export default App;