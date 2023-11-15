import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import State1 from './UseState/State1';
import State2 from './UseState/State2';
import State3 from './UseState/State3';
import State4 from './UseState/State4';
import State5 from './UseState/State5';

import Effect1 from './UseEffect/Effect1';
import Effect2 from './UseEffect/Effect2'; 
import Effect3 from './UseEffect/Effect3'; 
import Effect4 from './UseEffect/Effect4'; 
import Effect5 from './UseEffect/Effect5'; 

import Reducer1 from './UseReducer/Reducer1';
import Reducer2 from './UseReducer/Reducer2';
import Reducer3 from './UseReducer/Reducer3';
import Reducer4 from './UseReducer/Reducer4';
import Reducer5 from './UseReducer/Reducer5';


import CallBack1 from './UseCallBack/CallBack1'; 
import CallBack2 from './UseCallBack/CallBack2'; 
import CallBack3 from './UseCallBack/CallBack3'; 
import CallBack4 from './UseCallBack/CallBack4'; 
import CallBack5 from './UseCallBack/CallBack5'; 

import Home from './Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/state1" element={<State1 />} />
        <Route path="/state2" element={<State2 />} />
        <Route path="/state3" element={<State3 />} />
        <Route path="/state4" element={<State4 />} />
        <Route path="/state5" element={<State5 />} />

        <Route path="/effect1" element={<Effect1 />} />
        <Route path="/effect2" element={<Effect2 />} />
        <Route path="/effect3" element={<Effect3 />} />
        <Route path="/effect4" element={<Effect4 />} />
        <Route path="/effect5" element={<Effect5 />} />

        <Route path="/reducer1" element={<Reducer1 />} />
        <Route path="/reducer2" element={<Reducer2 />} />
        <Route path="/reducer3" element={<Reducer3 />} />
        <Route path="/reducer4" element={<Reducer4 />} />
        <Route path="/reducer5" element={<Reducer5 />} />

        <Route path="/callback1" element={<CallBack1 />} />
        <Route path="/callback2" element={<CallBack2 />} />
        <Route path="/callback3" element={<CallBack3 />} />
        <Route path="/callback4" element={<CallBack4 />} />
        <Route path="/callback5" element={<CallBack5 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
