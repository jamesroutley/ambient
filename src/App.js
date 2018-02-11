import React, { Component } from 'react';
import Tone from 'tone';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  componentDidMount() {
    let pentatonic = ["F3", "G3", "A4", "C4", "D4"];
    let majorArpeggio = ["C3", "E3", "G3", "C4"];
    let minorArpeggio = ["C3", "F3", "G3", "C4"];
    let scale = minorArpeggio;
    scale.map(createLoop)
    Tone.Transport.start();
  }

}

function getSynth() {
  return new Tone.Synth(
    "oscillator": {
      "type": "triangle",
    },
    "envelope": {
      "attack" : 0.005,
      "decay" : 0.1,
      "sustain" : 0.01,
      "release" : 0.9,
    }
  ).toMaster()
}

function createLoop(note) {
  let short = randInt(3) + 1
  let long = randInt(10) + 5
  let start = (randInt(5) + 1) * 4;
  var loop = new Tone.Loop(function(time){
    let synth = getSynth();
    synth.triggerAttackRelease(note, `${short}m`, time);
  }, `${long}m`).start(start);
  console.log(`Note: ${note}, short: ${short}, long: ${long}, start: ${start}`)
  return loop
}

function randInt(max) {
  return Math.floor(Math.random() * max)
}

export default App;
