import '../assets/css/App.css';
import DisplayInfo from './DisplayInfo';

import { useState } from 'react';

function Form() {

    let [count, setCount] = useState(0);
    let [email, getEmail] = useState("");

    return (
        <form className="formLogin">
            <input 
                type="text" 
                name="email" 
                placeholder="Saisir adresse mail"
                onKeyUp={(event) => getEmail(event.target.value)}  />
            <p className="emailHint">{email}</p>
            <input 
                type="password" 
                name="email" 
                placeholder="Saisir mot de passe"  />
            <button 
                type="button" 
                className="btn-hover color-1"
                onClick={() => setCount(count+1)}
                >Se connecter</button>
            <DisplayInfo information={count}/>
            <DisplayInfo information={email}/>
        </form>
    );
}

export default Form;