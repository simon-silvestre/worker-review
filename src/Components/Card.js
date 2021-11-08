import React, { useState } from 'react'

function Card() {

    const [index, setIndex] = useState(0);
    const [profil, setProfil] = useState([
        {
            img: 'Images/personn4.jpeg',
            name: 'Bill Anderson',
            job: 'the boss',
            bio: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
        },
        {
            img: 'Images/personn1.jpeg',
            name: 'Susan Smith',
            job: 'web developer',
            bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
        },
        {
            img: 'Images/personn2.jpeg',
            name: 'Anna Johnson',
            job: 'web designer',
            bio: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
        },
        {
            img: 'Images/personn3.jpeg',
            name: 'Peter Jones',
            job: 'intern',
            bio: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
        }
    ]);

    function prevProfil() {
        if(index > 0) {
            let newIndex = index - 1
            setIndex(newIndex)
        } else if (index <= 0) {
            let newIndex = profil.length - 1
            setIndex(newIndex)
        }
    }

    function nextProfil() {
        if(index < profil.length - 1) {
            let newIndex = index + 1
            setIndex(newIndex)
        } else if (index >= profil.length - 1) {
            let newIndex = 0
            setIndex(newIndex)
        }
    }

    function randomProfil() {
        let newIndex = Math.floor(Math.random() * (profil.length - 0) + 0)
        console.log(newIndex)
        setIndex(newIndex)
    }

    return (
        <div className="Card">
            <div className="profilImg">
                <div className="img">
                    <img src={profil[index].img} alt="profil" />
                </div>
                <div className="quote">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                </div>
            </div>
            <h4>{profil[index].name}</h4>
            <small>{profil[index].job}</small>
            <p>{profil[index].bio}</p>
            <div className="navigation">
                <svg onClick={prevProfil} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                </svg>
                <svg onClick={nextProfil} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
            </div>
            <button onClick={randomProfil}>Surprise Me</button>
        </div>
    )
}

export default Card
