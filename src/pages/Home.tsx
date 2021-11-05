import { useHistory } from 'react-router';

import '../styles/auth.scss';
import '../styles/Button.scss'

import { Button } from '../components/Button';
import { useState,useContext} from "react";
import { UserContext } from '../routes/router';

export function Home(){
    const {user, setUser} = useContext(UserContext);
    const history= useHistory();

    function navigateToNewRoom() {
        history.push('/rooms/new');
    }
    function enterRoom(){
        if (user == null || room == null){
            throw new Error('Missing information to enter a Room');
        }
    }

    const [room, setRoom] = useState();
    function getUser(val:any){
        setUser(val.target.value);
    }
    function getRoom(val:any){
        setRoom(val.target.value);
    }

    return (
        <div id="page-auth">
            <aside>
                <img id="imghome" src="https://xaflow.nl/src/Web/Files/Pages/UserTemplate/onderwijs-contentblock3.png" alt="Ilustração lateral do site"/>
                <strong>Crie sua sala e estude com seus amigos</strong>
                <p>Hours but make it better</p>
            </aside>
            <main>
                <div className="main-content">
                    <h1>LalaHours </h1>
                    <button onClick={navigateToNewRoom} className="create-room">
                        Crie sua sala
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form onSubmit={enterRoom}>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={getUser}
                        />
                        <input
                        type="text"
                        placeholder="Digite o código da sala"
                        onChange={getRoom}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                    <p>MLW exclusive </p>
                </div>
            </main>
        </div> 
    )
}
