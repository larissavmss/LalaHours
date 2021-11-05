import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import '../styles/global.scss';
import {createContext} from 'react';

import { BrowserRouter , Route } from 'react-router-dom';
import { useState } from 'react';

export const UserContext = createContext({} as any);


function Router() {
    const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
