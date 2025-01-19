import React, { useState, useEffect, useMemo } from 'react';
import './Body.css'

export const Body = () => {
    // =========================================================================
    // ========================= HELLO GREETING CHANGE =========================
    // =========================================================================
    const flickWords = useMemo(
        () => [
            'Hello,', // English - Worldwide
            'Bonjour,', // French - France, Canada, etc.
            'Hola,', // Spanish - Spain, Latin America
            'Hallo,', // German - Germany, Austria, etc.
            'Ciao,', // Italian - Italy
            'Konnichiwa,', // Japanese - Japan
            'Ni hao,', // Mandarin - China
            'Annyeonghaseyo,', // Korean - South Korea
            'Zdravstvuyte,', // Russian - Russia
            'Namaste,', // Hindi - India
            'Hallo,', // Dutch - Netherlands, Belgium
            'Olá,', // Portuguese - Portugal, Brazil
            'Yia sou,', // Greek - Greece
            'Salam,', // Arabic - Middle East, North Africa
            'Szia,', // Hungarian - Hungary
            'Merhaba,', // Turkish - Turkey
            'Aloha,', // Hawaiian - Hawaii
            'Shalom,', // Hebrew - Israel
            'Jambo,', // Swahili - East Africa
            'Privet,', // Russian (informal) - Russia
            'Hei,', // Norwegian / Finnish - Norway, Finland
            'Sveiki,', // Latvian - Latvia
            'Halló,', // Icelandic - Iceland
            'God dag,', // Danish / Swedish - Denmark, Sweden
            'Kamusta,', // Filipino - Philippines
            'Suas-dei,', // Khmer - Cambodia
            'Vanakkam,', // Tamil - India, Sri Lanka
            'Sa-wat-dee,', // Thai - Thailand
            'Kia ora,', // Māori - New Zealand
            'Bula,', // Fijian - Fiji
            'Tashi delek,', // Tibetan - Tibet
            'Mabuhay,', // Tagalog - Philippines
            'Ayubowan,', // Sinhalease - Sri Lanka
        ],
        []
    );

    // Constant Variable used
    const [part, setPart] = useState(flickWords[0]);
    const [i, setI] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const skipDelay = 15;
    const speed = 100;

    // Word Flick Function
    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                if (offset >= flickWords[i].length) {
                    setSkipCount((prev) => prev + 1);
                    if (skipCount === skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                } else {
                    setOffset((prev) => prev + 1);
                }
            } else {
                if (offset === 0) {
                    setForwards(true);
                    setI((prev) => (prev + 1) % flickWords.length);
                } else {
                    setOffset((prev) => prev - 1);
                }
            }
            setPart(flickWords[i].substr(0, offset));
        }, speed);

        return () => clearInterval(interval);
    }, [offset, forwards, skipCount, i, flickWords]);

    /* ====================================================================== */
    /* ============================== UNSW LINK ============================= */
    /* ====================================================================== */

    const [isClickable, setIsClickable] = useState(window.innerWidth > 860);

    const handleResize = () => {
      setIsClickable(window.innerWidth > 860);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const handleUNSWClick = () => {
      if (isClickable) {
        window.open('https://www.unsw.edu', '_blank');
      }
    };

    return (
        <div className='body-container'>
            {/* Main Body Information */}
            <div className='body-information'>
                {/*  */}
                <div className="name-introduction">
                    <div className="hello-greeting-wrapper">
                        <div className="hello-greeting">{part}</div>
                    </div>
                    I am Sithula! Welcome to my little hub of creativity and innovation.
                </div>
                <div className='degree'>
                    Robotics and Mechatronics Engineering Student at{' '}
                    <span
                        onClick={handleUNSWClick}
                        className={`unsw-text ${!isClickable ? 'disabled' : ''}`}
                        style={{
                            cursor: isClickable ? 'pointer' : 'not-allowed',
                        }}
                    >
                        UNSW - Sydney
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Body