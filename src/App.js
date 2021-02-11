import React from 'react';
import logo from './assets/images/logo.svg';
import instagram from './assets/svg/instagram.svg';
import linkedin from './assets/svg/linkedin.svg';
import './styles/App.css';
import kadu from './assets/images/kadu.jpg';
// import { } from 'react-dom';

export default function App() {

    return (
        <div class="content">
            <header>
                <a href="" >
                    <img class="logo" src={logo} />
                </a>
            </header>
            <div class="mid">
                <div class="img">
                    <img src={kadu} />
                </div>
                <div class="title">
                    <h1>
                        I'm Kadu<br />Lisboa
                    </h1>
                    <p>FullStack Developer</p>
                    <div class="social" >
                        <a href="https://www.instagram.com/kadulisboadev/" target="_blank">
                            <img src={instagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/kadulisboa/" target="_blank">
                            <img src={linkedin} />
                        </a>
                    </div>
                </div>

            </div>
            <a class="email" href="mailto:contato@kadulisboa.com.br">
                contato@kadulisboa.com.br
            </a>
        </div>
    );

}
