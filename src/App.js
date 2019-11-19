import React, { Component } from 'react'

import CreateTiles from './components/CreateTiles'

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
        <CreateTiles />
        <hr />
        <p class='copyright'>&copy; 2013-2019 GitHub</p>
      </section>
    </>
  )
}

export default App
