import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import instagram from '../assets/svg/instagram.svg';
import linkedin from '../assets/svg/linkedin.svg';
import github from '../assets/svg/github.svg';

export default function Title({ name }) {
    return (
        <div className="title">
            <h1>
                {name}
                {/* I'm Kadu<br />Lisboa */}
            </h1>
            <p>
                <ReactTypingEffect speed={100} eraseSpeed={100} typingDelay={500} eraseDelay={800} text={["FullStack Developer", "ReactJS and React Native", "PHP and NodeJS", "MySQL and PostgreSQL"]} />
            </p>
            <div className="social" >
                <a href="https://www.instagram.com/kadulisboadev/" target="_blank">
                    <img src={instagram} />
                </a>
                <a href="https://www.linkedin.com/in/kadulisboa/" target="_blank">
                    <img src={linkedin} />
                </a>
                <a href="https://github.com/kadulisboa" target="_blank">
                    <img src={github} />
                </a>
            </div>
        </div>
    )
}
