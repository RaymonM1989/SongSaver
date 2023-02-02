import React                from 'react';
import { Routes, Route }    from 'react-router-dom';
import Header               from './Header.js';
import { Navbar }           from './Navbar.js';
import { Main }             from './Main.js';
import { About }            from './About.js';
import Footer               from './Footer.js';


function App()
{
    return (
        <div className="app">
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='about' element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;