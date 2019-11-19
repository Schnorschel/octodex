import React, { Component } from 'react'

import barackToCat from '../images/baracktocat.jpg'
import droidToCat from '../images/droidtocat.png'
import filmToCat from '../images/filmtocat.png'
import homerCat from '../images/homercat.png'
import oktoberCat from '../images/oktobercat.png'
import privateInvesToCat from '../images/privateinvestocat.jpg'
import stormTroopoCat from '../images/stormtroopocat.png'
import marioToCat from '../images/plumber.jpg'

import cameronMcEfeeIcon from '../images/72919.jfif'
import tonyJaramilloIcon from '../images/1300064.png'
import nickHIcon from '../images/6218.jfif'
import jeejKangIcon from '../images/2053865.jfif'

import CatTile from './CatTile'
// import tiles from '../data/octocats.json'

const tiles = [
  {
    catImage: barackToCat,
    name: 'BarackToCat',
    ordinal: '1',
    authorImage: cameronMcEfeeIcon,
  },
  {
    catImage: droidToCat,
    name: 'DroidToCat',
    ordinal: '2',
    authorImage: tonyJaramilloIcon,
  },
  {
    catImage: filmToCat,
    name: 'FilmToCat',
    ordinal: '3',
    authorImage: jeejKangIcon,
  },
  {
    catImage: homerCat,
    name: 'HomerCat',
    ordinal: '4',
    authorImage: nickHIcon,
  },
  {
    catImage: oktoberCat,
    name: 'OktoberCat',
    ordinal: '5',
    authorImage: cameronMcEfeeIcon,
  },
  {
    catImage: privateInvesToCat,
    name: 'PrivateInvesToCat',
    ordinal: '6',
    authorImage: jeejKangIcon,
  },
  {
    catImage: stormTroopoCat,
    name: 'StormTroopoCat',
    ordinal: '7',
    authorImage: jeejKangIcon,
  },
  {
    catImage: marioToCat,
    name: 'MarioCat',
    ordinal: '8',
    authorImage: cameronMcEfeeIcon,
  },
]

const CreateTiles = () => {
  return tiles.map(tile => {
    return (
      <CatTile
        catImage={tile.catImage}
        name={tile.name}
        ordinal={tile.ordinal}
        authorImage={tile.authorImage}
      />
    )
  })
}

export default CreateTiles
