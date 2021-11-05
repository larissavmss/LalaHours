import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { useState} from "react";
import { Button } from "../components/Button";
import '../styles/auth.scss';
import '../styles/Button.scss';
import { UserContext } from '../routes/router';
import { useContext, FormEvent } from 'react';

import { database } from '../services/firebase';
import {ref, set } from "firebase/database"

export function NewRoom(){
    const {user, setUser} = useContext(UserContext);
    const history= useHistory();

    function enterRoom(){
        if (user == null || room == null){
            throw new Error('Missing information to enter a Room');
        }
        set(ref(database, 'rooms/' + room), {
            title: room,
            authorId: user,
        });
    }

    function getUser(val:any){
        setUser(val.target.value);
    }

    const [room, setRoom] = useState();
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={enterRoom}>
                    <input
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={getUser}
                        />
                        <input
                        type="text"
                        placeholder="Nome da Sala"
                        onChange={getRoom}
                        />
                        <Button>
                            Criar sala
                        </Button>
                    </form>
                    
                    <p>Quer entrar em uma sala ja existente? <Link to="/">Clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    )

}