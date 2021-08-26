import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

export const DataContext = React.createContext();

const App = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <DataContext.Provider value={{name, setName, room, setRoom}}>
            <Router>
                <Route path="/" exact component={Join} />
                <Route path="/chat"  component={Chat} />
            </Router>
        </DataContext.Provider>
    )
}

export default App;