import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Igra from './components/Igra';
import Navbar from './components/Navbar';
import Statistika from './components/Statistika';
export interface Pokusaj {
  glava: boolean,
  pogodio: boolean
}
function App() {
  const [pokusaji, setPokusaji] = useState<Pokusaj[]>([]);
  const dodajPokusaj = (pokusaj: Pokusaj) => {
    setPokusaji(prev => {
      return [...prev, pokusaj];
    })
  }
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/statistika'>
          <Statistika pokusaji={pokusaji} />
        </Route>
        <Route path='/'>
          <Igra sacuvaj={dodajPokusaj} pokusaji={pokusaji} />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
