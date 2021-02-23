import React from 'react';
import logo from './assets/images/logo.svg';
import './styles/App.css';
import kadu from './assets/images/kadu.jpg';
import Title from './components/title'

export default function App() {

    return (
        <div className="content">
            <header>
                <a href="" >
                    <img className="logo" src={logo} />
                </a>
            </header>
            <div className="mid">
                <div className="img">
                    <img src={kadu} />
                </div>
                <Title name={["I'm Kadu", <br />, "Lisboa"]} />

            </div>
            <a className="email" href="mailto:contato@kadulisboa.com.br">
                contato@kadulisboa.com.br
            </a>
        </div>
    );

}
