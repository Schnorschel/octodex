import React, { Component } from 'react'

import barackToCat from './images/baracktocat.jpg'
import droidToCat from './images/droidtocat.png'
import filmToCat from './images/filmtocat.png'
import homerCat from './images/homercat.png'
import oktoberCat from './images/oktobercat.png'
import privateInvesToCat from './images/privateinvestocat.jpg'
import stormTroopoCat from './images/stormtroopocat.png'
import marioToCat from './images/plumber.jpg'

import cameronMcEfeeIcon from './images/72919.jfif'
import tonyJaramilloIcon from './images/1300064.png'
import nickHIcon from './images/6218.jfif'
import jeejKangIcon from './images/2053865.jfif'

import CatTile from './components/CatTile'

const App = () => {
  return (
    <>
      <div class='headerContainer'>
        <ul>
          <li>
            <a href='#'>
              <i class='fab fa-github nonTransparentCat'></i> <span class='octodex'>Octodex</span>
            </a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
        </ul>
        <ul>
          <li>
            <i class='fab fa-github transparentCat'></i>
            <a href='https://twitter.com/githubdesign'>Follow us on Twitter</a>
          </li>
          <li>
            <a href='https://github.com/'>Back to GitHub</a>
          </li>
        </ul>
      </div>
      <section class='imagesContainer'>
        <CatTile
          catImage={barackToCat}
          name='BarackToCat'
          ordinal='1'
          authorImage={cameronMcEfeeIcon}
        />
        <CatTile
          catImage={droidToCat}
          name='DroidToCat'
          ordinal='2'
          authorImage={tonyJaramilloIcon}
        />
        <CatTile catImage={filmToCat} name='FilmToCat' ordinal='3' authorImage={jeejKangIcon} />
        <CatTile catImage={homerCat} name='HomerCat' ordinal='4' authorImage={nickHIcon} />
        <CatTile
          catImage={oktoberCat}
          name='OktoberCat'
          ordinal='5'
          authorImage={cameronMcEfeeIcon}
        />
        <CatTile
          catImage={privateInvesToCat}
          name='PrivateInvesToCat'
          ordinal='6'
          authorImage={jeejKangIcon}
        />
        <CatTile
          catImage={stormTroopoCat}
          name='StormTroopoCat'
          ordinal='7'
          authorImage={jeejKangIcon}
        />
        <CatTile
          catImage={marioToCat}
          name='MarioCat'
          ordinal='8'
          authorImage={cameronMcEfeeIcon}
        />
        <hr />
        <p class='copyright'>&copy; 2013-2019 GitHub</p>
      </section>
    </>
  )
}

export default App
