import React, { Component } from 'react'

const CatTile = props => {
  return (
    <div class='tileContainer'>
      <section class='imageContainer'>
        <a href='#'>
          <img class='catImage' src={props.catImage} />
        </a>
      </section>
      <section class='imageCaption'>
        <p>
          <span class='ordinal'>#{props.ordinal}</span>: {props.name}
        </p>{' '}
        <img class='authorImage' src={props.authorImage} />
      </section>
    </div>
  )
}

export default CatTile
