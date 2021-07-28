import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Container} from 'react-bootstrap';
import Homescreens from './Screens/Homescreens';

function App() {
  return (
    <>
     <Header/>
     <main className="py-3">
       <Container>
<Homescreens/>
       </Container> 
     </main>
     <Footer/>
    </>
  );
}

export default App;
