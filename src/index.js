/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import iconfinder_instagram from './iconfinder_instagram.svg';
import iconfinder_facebook from './iconfinder_facebook.svg';
import iconfinder_youtube from './iconfinder_youtube.svg';
import iconfinder_soundcloud from './iconfinder_soundcloud.svg';
import LHV_logo from './lhv-logo.svg';

const tileData = [{
  title: 'LHV Jalgpallikaardiga kogutud toetuste esimene osa jõuab klubideni maikuus',
  content: 'Koroonaviiruse mõjutustest ei ole pääsenud ka spordimaailm, seetõttu otsustas LHV Eesti jalgpalli peatoetajana maksta tänavused Jalgpallikaardi toetused välja kahes osas. Esimese perioodiga koguti toetusi üle 36 000 euro.',
  link: 1
},
{
  title: 'Nüüd saab lapsele konto avada mugavalt LHV mobiiliäpis',
  content: 'Aasta alguses teatas LHV võimalusest avada lapsele konto kodust lahkumata internetipangas. Nüüd on see lapsevanemale veelgi mugavam – lapsele saab konto avada ka meie mobiiliäpis.',
  link: "/et/2"
},
{
  title: 'Kuula LHV Podcasti',
  content: [<ul class="music"><li><a href="">Sander & Sander koroonakriisi mõjust Balti ettevõtetele</a></li>
    <li><a href="">Sander & Sander koroonakriisi mõjust Balti ettevõtetele</a></li>
    <li><a href="">Sander & Sander koroonakriisi mõjust Balti ettevõtetele</a></li>
  </ul>],
  link: 2
}];

const footerMenu = [{
  title: "Tule Kliendiks",
  links: ["Eraklient", "Äriklient", "Noortepank", "Lapsekonto", "Au-klient", "Privaatpangandus", "Ava konto"]
},
{
  title: "Leia kiirelt",
  links: ["Hinnakiri ja tingimused", "Ettepanekud ja kaebused", "Turvalisus", "Teata petulehest", "KKK"]
},
{
  title: "LHV",
  links: ["Ettevõttest", "Tööpakkumised", "Uudised", "Investor", "Finantsportaal"]
},
{
  title: "Kontakt",
  links: ["Kontakid", "Kontorid", "Broneeri kohtumisaeg", "Sularahaautomaadid"]
}];

ReactDOM.render(
  <React.StrictMode>
    <div id="wrapper">
      <header class="main-header">
        {/* header */}

        <div class="container header-wide">
          <div class="main-header-logo left-menu">
            <img src={LHV_logo} alt="logo_LHV" class="grid-item" width="84px" height="28px"></img>
          </div>
          <div id="menu-too" class="grid-item left-menu">
            <nav class="main-header-nav">
              <MenuList className="simple-menu top-menu">
                <MenuItem classes={{ root: 'menu-item selected', hover: 'menu-hover' }}>Pank</MenuItem>
                <MenuItem classes={{ root: 'menu-item', hover: 'menu-hover' }}>Finantsportaal</MenuItem>
                <MenuItem classes={{ root: 'menu-item', hover: 'menu-hover' }}>Investor</MenuItem>
              </MenuList>
            </nav>
          </div>
          <nav class="right-menu">
            <MenuList className="right-menu" class="grid-item">
              <MenuItem classes={{ root: 'menu-item', hover: 'menu-hover' }}>Ava konto</MenuItem>
              <MenuItem classes={{ root: 'menu-item selected', hover: 'menu-hover' }}>Sisene</MenuItem>
              <MenuItem classes={{ root: 'menu-item', hover: 'menu-hover' }}>EN</MenuItem>
              <MenuItem classes={{ root: 'menu-item', hover: 'menu-hover' }}>RU</MenuItem>
            </MenuList>
          </nav>
        </div>
        <div class="container login-row">
          <nav class="sub-menu-nav">
            <MenuList className="nupud" class="grid-item">
              <MenuItem classes={{ root: 'menu-item selected', hover: 'menu-hover' }}>ID-kaart</MenuItem>
              <MenuItem>Mobiil-ID</MenuItem>
              <MenuItem>Smart-ID</MenuItem>
              <MenuItem>PIN-kalkulaator</MenuItem>
              <MenuItem>Salasõna</MenuItem>
            </MenuList>
            <form action=" " class="searchform_control">
              <input type="text" class="form__control" placeholder="Kasutajanimi"></input>
              <button>Sisene</button>
            </form>
          </nav>
        </div>
        <div class="container main-menu-row">
          <nav class="main-menu">
            <MenuList className="nupud" class="grid-item">
              <MenuItem>IGAPÄEVAPANGANDUS</MenuItem>
              <MenuItem>RAHA KASVATAMINE</MenuItem>
              <MenuItem>LAEN JA LIISING</MenuItem>
              <MenuItem>PENSION</MenuItem>
              <MenuItem>VAJAD ABI?</MenuItem>
            </MenuList>
          </nav>
        </div>
      </header>

      {/*body */}
      <body>
        <div id="pleier">
          <div class="slideshow-container">

            <div id="myCarousel" class="carousel slide">

              <ol class="carousel-indicators">
                <li class="item1 active"></li>
                <li class="item2"></li>
                <li class="item3"></li>
              </ol>

              <div class="carousel-inner" role="listbox">


                <div class="item active">
                  <img src="https://via.placeholder.com/1500x600" alt="" ></img>
                </div>

                <div class="item">
                  <img src="https://via.placeholder.com/1500x600" alt=""></img>

                </div>

                <div class="item">
                  <img src="https://via.placeholder.com/1500x600" alt="" ></img>

                </div>

              </div>

            </div>

            <div style={{ text_center: "center" }}>
              <span class="dot" onclick="currentSlide(1)"></span>
              <span class="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
            </div>


          </div>
          <div class="kolumn">
            <div id="kolumnid">
              {/*CSS gridiga 3 kolumni */}

              <GridList cellHeight={'auto'} cols={3}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img} cols={tile.cols || 1} class="news-column">
                    <h3>{tile.title} </h3>
                    <p>{tile.content}</p>
                    <a href={tile.link}>Loe Lisa</a>
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>

      </body>

      {/*footer */}
      <footer>
        <div class="footer-container">
          <div id="footeri-kolumnid">
            {/*CSS gridiga 4 kolumni 
        Tule kliendiks
        Leia kiirelt
        LHV
        Kontakt
        */}
            <GridList cellHeight={'auto'} cols={4}>
              {footerMenu.map((item) => (
                <GridListTile cols="1">
                  <h5>{item.title} </h5>
                  {item.links.map((link) => (
                    <a class="footer-menu-item" href={link}>{link}</a>
                  ))}
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div class="logod">
            {/*Paremal: insta, FB, Youtube, SoundCloud
          Vasakul: App Store, Google Play */}
            <div class="icons-left">
              <a class="ikoon">
                <img src={iconfinder_instagram} alt="instagram-logo"></img>
              </a>
              <a class="ikoon">
                <img src={iconfinder_facebook} alt="facebook-logo"></img>
              </a>
              <a class="ikoon">
                <img src={iconfinder_youtube} alt="youtube-logo"></img>
              </a>
              <a class="ikoon">
                <img src={iconfinder_soundcloud} alt="soundcloud-logo"></img>
              </a>

            </div>
            <div class="icons-right">
              <a class="store">
              <div class="apple-store"></div>
              </a>
              <a class="store">
                <div class="google-play"></div>
              </a>
            </div>
          </div>

          <div id="copyright-text">
            <p>© 2001–2020 AS LHV Group, Tartu mnt 2, 10145, Tallinn. Oled finantsteenuseid pakkuvate ettevõtete AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus veebilehel. Ettevõtetel AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus on õigus salvestada kõiki neile sidevahendite teel antud korraldusi ja muud suhtlust ning kasutada vastavaid salvestisi antud korralduste või muude toimingute tõendamiseks. Enne finantsteenuse lepingu sõlmimist tutvu <a href="">teenuse tingimustega</a> või küsi lisainfot. Veebilehte ja sellel sisalduvat informatsiooni kasutades nõustud eeltoodud tingimuste ja veebilehe <a href="">kasutustingimustega</a>. <a href="">Noteeringud on viivitusega </a>.</p>
          </div>
          <div id="chat-bubble">

            {/*fixed, sõidab lehega kaasa */}
          </div>
        </div>
      </footer>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
