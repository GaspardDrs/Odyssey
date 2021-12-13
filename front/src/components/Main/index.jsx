import { React, useState,useEffect } from 'react';
import Axios from 'axios';
import StyledMain from './style';

function Main() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5050/tracks').then(({data}) => {
      console.log(data);
      setCharacter(data)
    })
    }, [])

  return (
    <StyledMain>
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form class='new-member-form'>
          <label for='name'>Nom de l&apos;Argonaute</label>
          <input id='name' name='name' type='text' placeholder='Charalampos' />
          <button type='submit'>Envoyer</button>
        </form>

        <h2>Membres de l'équipage</h2>
        <section class='member-list'>
          {characters.map((character) => {
            return (
              <>
                <div class='member-item'>
                  <ul>
                    <li>{character.firstname}</li>
                  </ul>
                </div>
              </>
            );
          })}
        </section>
      </main>
    </StyledMain>
  );
}

export default Main;
