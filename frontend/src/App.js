import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';
import Homescreens from './Screens/Homescreens';
import { BrowserRouter, Route } from 'react-router-dom'
import  ProductScreens  from './Screens/ProductScreens'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
     <Route path="/" component={Homescreens} exact/>
     <Route path="/product/:id" component={ProductScreens} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
