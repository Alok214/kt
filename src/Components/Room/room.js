import React from 'react';
import './room.css'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const Room = () => {
    
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        width: '300px',
        padding: '1%',
        marginLeft: '10px',
        boxShadow: '2px 5px 15px 0px rgba(0,0,0,0.75)'
      };
      
      

      const inputStyle = {
        marginTop: '10px',
      };
      
      const buttonStyle = {
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '20px'
      };
      

  return (
    <div>
      <form style={formStyle}>
      <h2>Device Control</h2>
        <input type="text" id="deviceName" placeholder='Device Name' style={inputStyle} />

        <input type="text" id="deviceId" placeholder='Device ID' style={inputStyle} />
        <div className='but-con'>
        <button style={buttonStyle}>Light</button>
        <button style={buttonStyle}><ToggleOnIcon className='ToggleOnIcon'/></button>
        <button style={buttonStyle}><ToggleOffIcon className='ToggleOffIcon'/></button>
        </div>

        <div className='but-con'>
        <button style={buttonStyle}>Fan</button>
        <button style={buttonStyle}><ToggleOnIcon className='ToggleOnIcon'/></button>
        <button style={buttonStyle}><ToggleOffIcon className='ToggleOffIcon'/></button>
        </div>

        <div className='but-con'>
        <button style={buttonStyle}>Misc</button>
        <button style={buttonStyle}><ToggleOnIcon className='ToggleOnIcon'/></button>
        <button style={buttonStyle}><ToggleOffIcon className='ToggleOffIcon'/></button>
        </div>

      </form>
    </div>
  );
};

export default Room;
