import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const navigate = useNavigate();
  const [isMenuOpen1, setIsMenuOpen1] = useState(localStorage.getItem('isMenuOpen1') === 'true' || false);
  const [isUseStateSelected1, setIsUseStateSelected1] = useState(localStorage.getItem('isUseStateSelected1') === 'true' || false);

  const [isMenuOpen2, setIsMenuOpen2] = useState(localStorage.getItem('isMenuOpen2') === 'true' || false);
  const [isUseStateSelected2, setIsUseStateSelected2] = useState(localStorage.getItem('isUseStateSelected2') === 'true' || false);

  const [isMenuOpen3, setIsMenuOpen3] = useState(localStorage.getItem('isMenuOpen3') === 'true' || false);
  const [isUseStateSelected3, setIsUseStateSelected3] = useState(localStorage.getItem('isUseStateSelected3') === 'true' || false);

  const [isMenuOpen4, setIsMenuOpen4] = useState(localStorage.getItem('isMenuOpen4') === 'true' || false);
  const [isUseStateSelected4, setIsUseStateSelected4] = useState(localStorage.getItem('isUseStateSelected4') === 'true' || false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const customButtonStyle = {
    backgroundColor: 'purple', 
    color: 'white', 
    border: '2px solid pink', 
    borderRadius: '5px', 
  };

  const toggleUseState1 = () => {
    setIsUseStateSelected1(!isUseStateSelected1);
    localStorage.setItem('isUseStateSelected1', !isUseStateSelected1);
  };

  const toggleUseState2 = () => {
    setIsUseStateSelected2(!isUseStateSelected2);
    localStorage.setItem('isUseStateSelected2', !isUseStateSelected2);
  };

  const toggleUseState3 = () => {
    setIsUseStateSelected3(!isUseStateSelected3);
    localStorage.setItem('isUseStateSelected3', !isUseStateSelected3);
  };
  const toggleUseState4 = () => {
    setIsUseStateSelected4(!isUseStateSelected4);
    localStorage.setItem('isUseStateSelected4', !isUseStateSelected4);
  };

  useEffect(() => {
    // Restore menu open state when the component mounts
    setIsMenuOpen1(localStorage.getItem('isMenuOpen1') === 'true' || false);
    setIsMenuOpen2(localStorage.getItem('isMenuOpen2') === 'true' || false);
    setIsMenuOpen3(localStorage.getItem('isMenuOpen3') === 'true' || false);
    setIsMenuOpen4(localStorage.getItem('isMenuOpen4') === 'true' || false);
  }, []);

  return (
    <>
    <div className="dropdown" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }} >
      <button
        className={`btn ${isUseStateSelected1 ? 'btn-primary' : 'btn-secondary'} custom-button dropdown-toggle`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded={isMenuOpen1}
        style={isUseStateSelected1 ? customButtonStyle : {}}
        onClick={() => {
          setIsMenuOpen1(!isMenuOpen1);
          toggleUseState1();
        }}
      > UseState </button>
      {isUseStateSelected1 && (
        <ul className={`dropdown-menu ${isMenuOpen1 ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
          <li><button className="btn btn-info custom-button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleNavigate('/state1')}> Example UseState 1</button></li>
          <li><button className="btn btn-warning custom-button" style={{ backgroundColor: 'orange', color: 'white' }} onClick={() => handleNavigate('/state2')}>Example UseState 2</button></li>
          <li><button className="btn btn-danger custom-button" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleNavigate('/state3')}>Example UseState 3</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleNavigate('/state4')}>Example UseState 4</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'yellowgreen', color: 'white' }} onClick={() => handleNavigate('/state5')}>Example UseState 5</button></li>
        </ul>
      )}
    </div>
    <div className="dropdown" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <button
        className={`btn ${isUseStateSelected2 ? 'btn-primary' : 'btn-secondary'} custom-button dropdown-toggle`}
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded={isMenuOpen2}
        style={isUseStateSelected2 ? customButtonStyle : {}}
        onClick={() => {
          setIsMenuOpen2(!isMenuOpen2);
          toggleUseState2();
        }}
      > UseEffect </button>
      {isUseStateSelected2 && (
        <ul className={`dropdown-menu ${isMenuOpen2 ? 'show' : ''}`} aria-labelledby="dropdownMenuButton2">
          <li><button className="btn btn-info custom-button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleNavigate('/effect1')}> Example UseEffect 1</button></li>
          <li><button className="btn btn-warning custom-button" style={{ backgroundColor: 'orange', color: 'white' }} onClick={() => handleNavigate('/effect2')}>Example UseEffect 2</button></li>
          <li><button className="btn btn-danger custom-button" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleNavigate('/effect3')}>Example UseEffect 3</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleNavigate('/effect4')}>Example UseEffect 4</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'yellowgreen', color: 'white' }} onClick={() => handleNavigate('/effect5')}>Example UseEffect 5</button></li>
        </ul>
      )}
    </div>
    <div className="dropdown" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <button
        className={`btn ${isUseStateSelected3 ? 'btn-primary' : 'btn-secondary'} custom-button dropdown-toggle`}
        type="button"
        id="dropdownMenuButton3"
        data-bs-toggle="dropdown"
        aria-expanded={isMenuOpen3}
        style={isUseStateSelected3 ? customButtonStyle : {}}
        onClick={() => {
          setIsMenuOpen3(!isMenuOpen3);
          toggleUseState3();
        }}
      > UseReducer </button>
      {isUseStateSelected3 && (
        <ul className={`dropdown-menu ${isMenuOpen3 ? 'show' : ''}`} aria-labelledby="dropdownMenuButton3">
          <li><button className="btn btn-info custom-button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleNavigate('/reducer1')}> Example UseReducer 1</button></li>
          <li><button className="btn btn-warning custom-button" style={{ backgroundColor: 'orange', color: 'white' }} onClick={() => handleNavigate('/reducer2')}>Example UseReducer 2</button></li>
          <li><button className="btn btn-danger custom-button" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleNavigate('/reducer3')}>Example UseReducer 3</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleNavigate('/reducer4')}>Example UseReducer 4</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'yellowgreen', color: 'white' }} onClick={() => handleNavigate('/reducer5')}>Example UseReducer 5</button></li>
        </ul>
      )}
    </div>
    <div className="dropdown" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <button
        className={`btn ${isUseStateSelected4 ? 'btn-primary' : 'btn-secondary'} custom-button dropdown-toggle`}
        type="button"
        id="dropdownMenuButton4"
        data-bs-toggle="dropdown"
        aria-expanded={isMenuOpen4}
        style={isUseStateSelected4 ? customButtonStyle : {}}
        onClick={() => {
          setIsMenuOpen4(!isMenuOpen4);
          toggleUseState4();
        }}
      > UseCallBack </button>
      {isUseStateSelected4 && (
        <ul className={`dropdown-menu ${isMenuOpen4 ? 'show' : ''}`} aria-labelledby="dropdownMenuButton4">
          <li><button className="btn btn-info custom-button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleNavigate('/callback1')}> Example UseCallBack 1</button></li>
          <li><button className="btn btn-warning custom-button" style={{ backgroundColor: 'orange', color: 'white' }} onClick={() => handleNavigate('/callback2')}>Example UseCallBack 2</button></li>
          <li><button className="btn btn-danger custom-button" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleNavigate('/callback3')}>Example UseCallBack 3</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleNavigate('/callback4')}>Example UseCallBack 4</button></li>
          <li><button className="btn btn-success custom-button" style={{ backgroundColor: 'yellowgreen', color: 'white' }} onClick={() => handleNavigate('/callback5')}>Example UseCallBack 5</button></li>
        </ul>
      )}
    </div>
    </>
  );
}

export default DropdownMenu;
