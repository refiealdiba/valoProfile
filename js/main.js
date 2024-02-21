// AGENT SESSION
const roleLogo = document.querySelectorAll('.logo img');
const roleTitle = document.querySelectorAll('.role-text p')
const cLogo = document.querySelectorAll('.c-logo img');
const eLogo = document.querySelectorAll('.e-logo img');
const qLogo = document.querySelectorAll('.q-logo img');
const xLogo = document.querySelectorAll('.x-logo img');
const cName = document.querySelectorAll('.c-right .ability-name h2');
const qName = document.querySelectorAll('.q-right .ability-name h2');
const eName = document.querySelectorAll('.e-right .ability-name h2');
const xName = document.querySelectorAll('.x-right .ability-name h2');
const cDesc = document.querySelectorAll('.c-right .ability-desc p');
const qDesc = document.querySelectorAll('.q-right .ability-desc p');
const eDesc = document.querySelectorAll('.e-right .ability-desc p');
const xDesc = document.querySelectorAll('.x-right .ability-desc p');
const agentImg = document.querySelectorAll('.middle .agent img');
const highlightVideo = document.querySelector('.my-agent .agent-list .right .highlight video');

roleLogo.forEach((logo,indx) => {
    logo.style.transform = `translateY(${indx*120}%)`;
});

roleTitle.forEach((title, indx) => {
    title.style.transform = `translateY(${indx*100}%)`;
})

cLogo.forEach((cLogo, indx) => {
    cLogo.style.transform = `translateY(${indx*110}%)`;
})
qLogo.forEach((qLogo, indx) => {
    qLogo.style.transform = `translateY(${indx*115}%)`;
})
eLogo.forEach((eLogo, indx) => {
    eLogo.style.transform = `translateY(${indx*120}%)`;
})
xLogo.forEach((xLogo, indx) => {
    xLogo.style.transform = `translateY(${indx*125}%)`;
})
// AbilityName
cName.forEach((cName, indx) => {
    cName.style.transform = `translateX(${indx*-400}%)`;
})
qName.forEach((qName, indx) => {
    qName.style.transform = `translateX(${indx*-400}%)`;
})
eName.forEach((eName, indx) => {
    eName.style.transform = `translateX(${indx*-400}%)`;
})
xName.forEach((xName, indx) => {
    xName.style.transform = `translateX(${indx*-400}%)`;
})
// AbilityDesc
cDesc.forEach((cDesc, indx) => {
    cDesc.style.transform = `translateX(${indx*200}%)`;
})
qDesc.forEach((qDesc, indx) => {
    qDesc.style.transform = `translateX(${indx*200}%)`;
})
eDesc.forEach((eDesc, indx) => {
    eDesc.style.transform = `translateX(${indx*200}%)`;
})
xDesc.forEach((xDesc, indx) => {
    xDesc.style.transform = `translateX(${indx*200}%)`;
})
// AGENT IMG
const agentBgColor = ['#201b2b','#001a3c','#7d281f', '#ae8b3a']
const agentBg = document.querySelector('.my-agent');
agentImg.forEach((agent, indx) => {
    agent.style.zIndex = `${7 - indx}`;
    agent.style.transform = `translate(${indx * 80}%, ${indx * -10}%) scale(${1 - (indx * 0.5)})`;
});
agentImg[0].classList.add('img-active');
agentBg.style.backgroundColor = agentBgColor[0];

// AGENT NAME
const nameContainer = document.querySelector('.middle');
const nameAgent = ['REYNA', 'OMEN', 'RAZE', 'CHAMBER'];
const agentNameColor = ['#b8107d', '#276db7', 'orange', '#f2db97']
const agentNameStroke = ['-webkit-text-stroke-color: #b8107d', '-webkit-text-stroke-color: #276db7', '-webkit-text-stroke-color: orange', '-webkit-text-stroke-color: #f2db97']
for(let i = 0; i<3; i++){
    const pElement = document.createElement('p');
    const pText = document.createTextNode(nameAgent[0]);
    pElement.appendChild(pText);
    nameContainer.appendChild(pElement);
}

const agentP = document.querySelectorAll('.middle p');
agentP[1].classList.add('after');
agentP[2].classList.add('before');

let currLogo = 0;
let maxLogo = roleLogo.length - 1;

// HIGHLIGHT VIDEO
const highlightSource = ['reynaHighlight', 'omenHighlight','razeHighlight', 'chamberHighlight'];

const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
btnNext.addEventListener('click', function() {
    if(currLogo === maxLogo - 1){
        btnNext.style.display='none'
        btnPrev.style.display='inline-block'
        currLogo = maxLogo;
    } else {
        currLogo++;
        btnNext.style.display='inline-block'
        btnPrev.style.display='inline-block'
    }
    updateLogo();
    m.cycleText('next')
});

if(currLogo === 0){
    btnPrev.style.display='none'
}

btnPrev.addEventListener('click', function() {
    if(currLogo === 1){
        btnPrev.style.display='none'
        btnNext.style.display='inline-block'
        currLogo = 0;

    } else {
        currLogo--;
        btnPrev.style.display='inline-block'
        btnNext.style.display='inline-block'
    }
    updateLogo();
    m.cycleText('prev');
});

roleLogo[0].style.opacity = '100%'
roleTitle[0].style.opacity = '100%'
function updateLogo(){
    roleLogo.forEach((logo, indx) => {
        const offset = indx - currLogo;
        logo.style.transform = `translateY(${offset * 120}%)`;
        if (indx == currLogo){
            roleLogo[indx].style.opacity = '100%'
        } else {
            roleLogo[indx].style.opacity = '0%'
        }
    });
    roleTitle.forEach((title, indx) => {
        const offset = indx - currLogo;
        title.style.transform = `translateY(${offset * 110}%)`;
        if (indx == currLogo){
            roleTitle[indx].style.opacity = '100%'
        } else {
            roleTitle[indx].style.opacity = '0%'
        }
    });
    cLogo.forEach((cLogo, indx) => {
        const offset = indx - currLogo;
        cLogo.style.transform = `translateY(${offset * 110}%)`;
    });

    qLogo.forEach((qLogo, indx) => {
        const offset = indx - currLogo;
        qLogo.style.transform = `translateY(${offset * 115}%)`;
    });
    eLogo.forEach((eLogo, indx) => {
        const offset = indx - currLogo;
        eLogo.style.transform = `translateY(${offset * 120}%)`;
    });
    xLogo.forEach((xLogo, indx) => {
        const offset = indx - currLogo;
        xLogo.style.transform = `translateY(${offset * 125}%)`;
    });

    // AbilityName
    cName.forEach((cName, indx) => {
        const offset = indx - currLogo;
        cName.style.transform = `translateX(${offset*-400}%)`;
    })
    qName.forEach((qName, indx) => {
        const offset = indx - currLogo;
        qName.style.transform = `translateX(${offset*-400}%)`;
    })
    eName.forEach((eName, indx) => {
        const offset = indx - currLogo;
        eName.style.transform = `translateX(${offset*-400}%)`;
    })
    xName.forEach((xName, indx) => {
        const offset = indx - currLogo;
        xName.style.transform = `translateX(${offset*-400}%)`;
    })

    // AbilityDesc
    cDesc.forEach((cDesc, indx) => {
        const offset = indx - currLogo;
        cDesc.style.transform = `translateX(${offset*200}%)`;
    })
    qDesc.forEach((qDesc, indx) => {
        const offset = indx - currLogo;
        qDesc.style.transform = `translateX(${offset*200}%)`;
    })
    eDesc.forEach((eDesc, indx) => {
        const offset = indx - currLogo;
        eDesc.style.transform = `translateX(${offset*200}%)`;
    })
    xDesc.forEach((xDesc, indx) => {
        const offset = indx - currLogo;
        xDesc.style.transform = `translateX(${offset*200}%)`;
    })

    // AGENT NAME
    var Messenger = function (el) {
        'use strict';
        var m = this;
    
        m.init = function () {
            m.codeletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            m.message = 0;
            m.current_length = 0;
            m.fadeBuffer = false;
            m.messages = [
                'REYNA.',
                'OMEN',
                'RAZE',
                'CHAMBER'
            ];
    
            m.animateIn();
        };
    
        m.generateRandomString = function (length) {
            var random_text = '';
            while (random_text.length < length) {
                random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            }
    
            return random_text;
        };
    
        m.animateIn = function () {
            if (m.current_length < m.messages[m.message].length) {
                m.current_length = m.current_length + 2;
                if (m.current_length > m.messages[m.message].length) {
                    m.current_length = m.messages[m.message].length;
                }
    
                var message = m.generateRandomString(m.current_length);
                document.querySelectorAll(el).forEach((element) => {
                    element.innerHTML = message;
                });
    
                setTimeout(m.animateIn, 20);
            } else {
                setTimeout(m.animateFadeBuffer, 20);
            }
        };
    
        m.animateFadeBuffer = function () {
            if (m.fadeBuffer === false) {
                m.fadeBuffer = [];
                for (var i = 0; i < m.messages[currLogo].length; i++) {
                    m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[currLogo].charAt(i) });
                }
            }
    
            var do_cycles = false;
            var message = '';
    
            for (var i = 0; i < m.fadeBuffer.length; i++) {
                var fader = m.fadeBuffer[i];
                if (fader.c > 0) {
                    do_cycles = true;
                    fader.c--;
                    message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
                } else {
                    message += fader.l;
                }
            }
    
            document.querySelectorAll(el).forEach((element) => {
                element.innerHTML = message;
            });
    
            if (do_cycles === true) {
                setTimeout(m.animateFadeBuffer, 50);
            } else {
                // setTimeout(m.cycleText, 2000);
            }
        };
    
        m.cycleText = function (direction) {
            if (direction === 'next') {
                m.message = (m.message + 1) % m.messages.length;
            } else if (direction === 'prev') {
                m.message = (m.message - 1 + m.messages.length) % m.messages.length;
            }
    
            m.current_length = 0;
            m.fadeBuffer = false;
            document.querySelectorAll(el).forEach((element) => {
                element.innerHTML = '';
            });
    
            setTimeout(m.animateIn, 200);
        };
    
        m.init();
    }
    
    console.clear();
    var messenger = new Messenger('.middle p');

        // color change
    agentP.forEach((agent, p) => {
        agent.style.color = agentNameColor[currLogo];
    });
    agentP[1].style = agentNameStroke[currLogo];
    agentP[2].style = agentNameStroke[currLogo];
    

    // AGENT IMG
    agentImg.forEach((agent, indx) => {
        const offset = indx - currLogo;
        agent.style.transform = `translate(${offset * 80}%, ${offset * -10}%) scale(${1 - (offset * 0.5)})`;
        agentBg.style.backgroundColor = agentBgColor[currLogo];
        if (indx == currLogo) {
            agentImg[indx].classList.add('img-active');
        } else {
            agentImg[indx].classList.remove('img-active');
        }
    });

    // HIGHLIGHT VIDEO
    highlightVideo.setAttribute('src', ('videos/highlights/' + highlightSource[currLogo] + '.webm'));
}

// MAP FUNCTION
const mapContainer = document.querySelector('.map-list .left .map-name');
const mapDescContainer = document.querySelector('.map-list .mid');
const mapBgContainer = document.querySelector('.my-map');
const mapBgName = ['ascent', 'bind', 'breeze', 'haven', 'lotus', 'sunset']
const mapDescText = ['An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.', 'Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.', 'Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You`ll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.', 'Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes', 'A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.', 'A disaster at a local kingdom facility threatens to engulf the whole neighborhood. Stop at your favorite food truck then fight across the city in this traditional three lane map.']

// generate desc
const pDesc = document.createElement('p');
const pDescTxt = document.createTextNode(mapDescText[0]);
mapDescContainer.appendChild(pDesc);
pDesc.appendChild(pDescTxt);

// generate name
const mapName = ['Ascent', 'Bind', 'Breeze', 'Haven', 'Lotus', 'Sunset'];
const mapNameLength = mapName.length;

// generate minimap
const miniContainer = document.querySelector('.my-map .map-list .right');
const miniCreate = document.createElement('img');
const miniCreateContainer = document.createElement('div');
// const catchDiv = document.querySelector('.my-map .map-list .right div');
miniCreateContainer.classList.add('mini-container');
miniContainer.appendChild(miniCreateContainer);
miniCreateContainer.appendChild(miniCreate);

const miniMap = document.querySelector('.my-map .map-list .right .mini-container img');

for (let x = 0; x < mapNameLength ; x++) {
    const pMap = document.createElement('p');
    const pMapTxt = document.createTextNode(mapName[x]);
    pMap.appendChild(pMapTxt);
    mapContainer.appendChild(pMap);

    const imgMap = document.createElement('img');
    imgMap.setAttribute('src', 'img/map/'+mapBgName[x]+'.webp')
    imgMap.classList.add('img-map');
    mapBgContainer.appendChild(imgMap);
}

const mapAll = document.querySelectorAll('.map-list .left .map-name p');
const descAll = document.querySelector('.map-list .mid p');

let currMap = 0;
const maxMap = mapAll.length - 1;
mapAll[0].style.fontSize = '100px';
// mapBg.style.background = 'url(img/map/'+ mapBgName[0] +'.webp)';

const bgAll = document.querySelectorAll('.my-map .img-map');
const bgAllLength = bgAll.length - 1;
bgAll.forEach((bg, indx) => {
    const zIndex = - indx;
    bg.style.zIndex = zIndex;
    bg.style.width = '20%';
    bg.style.height = '20%';
    bg.style.left = '78%';
    bg.style.top = '75%';
});
bgAll[0].style.zIndex = '-6';
bgAll[0].style.width = '100%';
bgAll[0].style.height = '100%';
bgAll[0].style.left = '0';
bgAll[0].style.top = '0';

miniMap.setAttribute('src', 'img/map/' + mapBgName[0] + 'Mini.webp');

mapAll.forEach((map, indx) => {
    map.addEventListener('click', function() {
        let clicked = Array.from(mapAll).indexOf(map);
        currMap = clicked;

        mapAll.forEach((map, indx) => {
            const offset = (indx - currMap);
            map.style.fontSize = '30px';
        });
        mapContainer.style.transform = `translateY(${-currMap * 100}px)`;
        map.style.fontSize = '100px';
        descAll.innerHTML = mapDescText[currMap];

        bgAll[currMap].style.zIndex = '-6';
        bgAll[currMap].style.width = '100%';
        bgAll[currMap].style.height = '100%';
        bgAll[currMap].style.left = '0';
        bgAll[currMap].style.top = '0';

        miniMap.setAttribute('src', 'img/map/' + mapBgName[currMap] + 'Mini.webp');
    });
});

// MUSIC
const musicBg = document.querySelector('.my-music');
const playingCover = document.querySelector('.playing-detail img');
const playingName = document.querySelector('.playing-detail .playing-song');
const playingArtist = document.querySelector('.playing-detail .playing-artist');
let musicCover = document.querySelector('.music-cover');
let musicName = document.querySelector('.music-name');
let musicArtist = document.querySelector('.music-artist');

let btnPlayPause = document.querySelector('.playpause-music');
let btnPrevMusic = document.querySelector('.prev-music');
let btnNextMusic = document.querySelector('.next-music');

let seekSlider = document.querySelector('.music-slider progress');
let volumeSlider = document.querySelector('.music-button .volume-music progress');
let currTime = document.querySelector('.current-time');
let totalTime = document.querySelector('.total-time');

let musicIndex = 0;
let isPlaying = false;
let updateTimer;

let currMusic = document.createElement('audio')

let musicList = [
    {
        name: "Margaret",
        artist: "Lana Del Rey",
        cover: "img/music/cover/margaretCover.webp",
        bg: "img/music/lanaBg.jpg",
        path: "audio/song/Margaret.mp3"
    },
    {
        name: "Doin` Time",
        artist: "Lana Del Rey",
        cover: "img/music/cover/lanaCover.jpg",
        bg: "img/music/lanaBg.jpg",
        path: "audio/song/DoinTime.mp3"
    },
    {
        name: "Smile",
        artist: "Juice WRLD ft.(The Weekend)",
        cover: "img/music/cover/juiceCover.jpg",
        bg: "img/music/juiceBg.jpg",
        path: "audio/song/Smile.mp3"
    },
    {
        name: "Alright",
        artist: "Kendrick Lamar",
        cover: "img/music/cover/kendrickCover.jpg",
        bg: "img/music/kendrickBg.jpg",
        path: "audio/song/Alright.mp3"
    },
    {
        name: "Drive Safe",
        artist: "Rich Brian",
        cover: "img/music/cover/brianCover.jpg",
        bg: "img/music/brianBg.jpg",
        path: "audio/song/DriveSafe.mp3"
    },
    {
        name: "Conversations",
        artist: "Juice WRLD",
        cover: "img/music/cover/juiceCover.jpg",
        bg: "img/music/juiceBg.jpg",
        path: "audio/song/Conversations.mp3"
    },
    {
        name: "Godzilla",
        artist: "Eminem ft.(Juice WRLD)",
        cover: "img/music/cover/eminemCover.jpg",
        bg: "img/music/eminemBg.jpg",
        path: "audio/song/Godzilla.mp3"
    },
    {
        name: "No Surprises",
        artist: "Radiohead",
        cover: "img/music/cover/radioheadCover.webp",
        bg: "img/music/radioheadBg.jpg",
        path: "audio/song/NoSurprises.mp3"
    },
    {
        name: "Hell N Back",
        artist: "Bakar",
        cover: "img/music/cover/bakarCover.jpg",
        bg: "img/music/bakarBg.jpg",
        path: "audio/song/HellNBack.mp3"
    },
    {
        name: "Last Night On Earth",
        artist: "Green Day",
        cover: "img/music/cover/greenCover.jpg",
        bg: "img/music/greenBg.jpg",
        path: "audio/song/Last Night On Earth.mp3"
    },
    
]


const allMusicContainer = document.querySelector('.music-all');

musicList.forEach((music) => {
    const boxElement = document.createElement('div');
    const imgElement = document.createElement('img');
    const boxDetailElement = document.createElement('div');
    const hElement = document.createElement('h1');
    const pElement = document.createElement('p');

    boxElement.classList.add('box-music');
    boxDetailElement.classList.add('box-detail'); // Menggunakan add, bukan ()
    imgElement.src = music.cover; // Menetapkan src gambar
    hElement.textContent = music.name; // Menggunakan textContent
    pElement.textContent = music.artist; // Menggunakan textContent

    boxElement.appendChild(imgElement);
    boxElement.appendChild(boxDetailElement);
    boxDetailElement.appendChild(hElement);
    boxDetailElement.appendChild(pElement);

    allMusicContainer.appendChild(boxElement); // Menambahkan boxElement ke container
});

const allMusic = document.querySelectorAll('.music-all .box-music');
allMusic.forEach((music, index) => {
    music.addEventListener('click', function() {
        musicIndex = index;
        loadTrack(musicIndex);
        playMusic();
    })
    return musicIndex;
})

function loadTrack(musicIndex){
    clearInterval(updateTimer);
    resetValues();

    currMusic.src = musicList[musicIndex].path;
    currMusic.load();

    musicCover.setAttribute('src', musicList[musicIndex].cover);
    musicBg.style.background = 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7511379551820728) 100%), url(' + musicList[musicIndex].bg + ')';
    musicBg.style.backgroundSize = 'cover';
    musicBg.style.backgroundRepeat = 'no-repeat';

    musicName.textContent = musicList[musicIndex].name;
    musicArtist.textContent = musicList[musicIndex].artist;

    playingCover.setAttribute('src', musicList[musicIndex].cover);
    playingName.textContent = musicList[musicIndex].name;
    playingArtist.textContent = musicList[musicIndex].artist;

    updateTimer = setInterval(seekUpdate, 1000);

    currMusic.addEventListener('ended', nextMusic)
}

function resetValues() {
    currTime.textContent = "00:00";
    totalTime.textContent = "00:00";
    seekSlider.value = 0;
}

function playPauseMusic() {
    if(!isPlaying) playMusic();
    else pauseMusic();
}

function playMusic() {
    currMusic.play();
    isPlaying = true;
    // Replace icon with the pause icon
    btnPlayPause.innerHTML = '<svg width="40px" height="40px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Pause</title><desc>Created with Sketch.</desc><g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ic_fluent_pause_48_filled" fill="aliceblue" fill-rule="nonzero"><path d="M17.75,7 C19.5449254,7 21,8.45507456 21,10.25 L21,37.75 C21,39.5449254 19.5449254,41 17.75,41 L12.25,41 C10.4550746,41 9,39.5449254 9,37.75 L9,10.25 C9,8.45507456 10.4550746,7 12.25,7 L17.75,7 Z M35.75,7 C37.5449254,7 39,8.45507456 39,10.25 L39,37.75 C39,39.5449254 37.5449254,41 35.75,41 L30.25,41 C28.4550746,41 27,39.5449254 27,37.75 L27,10.25 C27,8.45507456 28.4550746,7 30.25,7 L35.75,7 Z" id="🎨-Color"></path></g></g></g></svg>';
}

function pauseMusic() {
    currMusic.pause();
    isPlaying = false;

    // replacee button icon
    btnPlayPause.innerHTML = '<svg width="40px" height="40px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#131320"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Play</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="aliceblue"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path></g></g></g></g></svg>';
}

function nextMusic(){
    if (musicIndex < musicList.length - 1){
        musicIndex += 1;
    } else {
        musicIndex = 0;
    }

    loadTrack(musicIndex);
    playMusic();
}

function prevMusic(){
    if (musicIndex > 0){
        musicIndex -= 1;
    } else {
        musicIndex = musicList.length - 1;
    }

    loadTrack(musicIndex);
    playMusic();
}

function seekTo() {
    let seekToTime = currMusic.duration * (seekSlider.value/100);

    currMusic.currentTime = seekToTime;
}

// function setVolume() {
//     currMusic.volume = volumeSlider.value / 100;
// }
function seekToVolume() {
    currMusic.volume = volumeSlider.value;
}

// Fungsi seekUpdate untuk memperbarui tampilan seek dan waktu volume
function seekUpdateVolume() {
    let seekPosition = volumeSlider.value * 100;
    volumeSlider.value = seekPosition;
}

volumeSlider.addEventListener('click', function (e) {
    var x = e.pageX - this.getBoundingClientRect().left,
        clickedValue = x / this.offsetWidth;

    // Memastikan clickedValue berada dalam rentang 0 hingga 1
    clickedValue = Math.max(0, Math.min(1, clickedValue));

    this.value = clickedValue;

    // Memanggil fungsi seekToVolume dan seekUpdateVolume
    seekToVolume();
    seekUpdateVolume();
});

// function volumeUpdate() {
//     let seekTo
// }

function seekUpdate() {
    let seekPosition = 0;
    if(!isNaN(currMusic.duration)) {
        seekPosition = currMusic.currentTime * (100/currMusic.duration);
        seekSlider.value = seekPosition;

        let currentMinutes = Math.floor(currMusic.currentTime/60);
        let currentSeconds = Math.floor(currMusic.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currMusic.duration/60);
        let durationSeconds = Math.floor(currMusic.duration - durationMinutes*60);

        if(currentSeconds < 10) { currentSeconds = "0" + currentSeconds;}
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds;}
        if(currentMinutes < 10) { currentMinutes = "0" + currentMinutes;}
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes;}

        currTime.textContent = currentMinutes + ":" + currentSeconds;
        totalTime.textContent = durationMinutes + ":" + durationSeconds;
    }
}

loadTrack(musicIndex);
seekSlider.addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft,
    clickedValue = x * this.max / this.offsetWidth;

    this.value = clickedValue;

    // Tambahan kode: ubah posisi seek pada lagu
    seekTo();

    // Update tampilan seek dan waktu
    seekUpdate();
});


// Auto Scroll

// volumeSlider.addEventListener('click', function (e) {
//     var x = this.offsetLeft,
//     clickedValue = x * this.max/this.offsetLeft;

//     this.value = clickedValue;
//     // Update tampilan seek dan waktu
//     setVolume();
// });









// GUNAKAN INI UNTUK SLIDER BG
// mapAll.forEach((map, indx) => {
//     map.style.transform = `translateY(${indx*100}%)`
//     map.style.fontSize = '100px';

//     map.addEventListener('click', function(){
//         let currentTransform = map.style.transform;
//         map.style.transform = `${currentTransform} translateY(${indx * - 100}%)`;
//     })
// });



// console.log(mapAll);