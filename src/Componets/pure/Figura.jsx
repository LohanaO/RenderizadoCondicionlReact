import React,{useState} from 'react'

const Figura = () => {

const [fondo, setFondo] = useState('#000000');

const [ManageIntervalo, setManageIntervalo] = useState(0);

const [DobleClick, setDobleClick] = useState(0);

const getFondo = () => Math.floor(Math.random() * 256);



const getHex = (red, green, blue) => {
  return (
    '#' +
    [red, green, blue]
      .map((c) => {
        const hex = c.toString(16);
        return hex.lenght === 1 ? '0' + hex : hex;
      })
      .join('')
  );
};

const generateHex = () => {
  const rgb = {
    r: getFondo(),
    g: getFondo(),
    b: getFondo(),
  };
  return setFondo(getHex(rgb.r, rgb.g, rgb.b));
};

const CambioFondo = () => {
    return setManageIntervalo(setInterval(generateHex,500));
};

const StopCambioColor= () =>{
    clearInterval(ManageIntervalo);
    
}

const CambioClick= () =>{
    clearInterval(ManageIntervalo);
}



  return (
    <div>
    <div
     onMouseOver={CambioFondo}
         onMouseLeave={StopCambioColor}
         onDoubleClick={CambioClick}
        style={{width:'255px', height:'255px',backgroundColor: fondo, margin:'auto'}}></div>
        {' '}
      <p style={{ color: 'black' }}> Color: {fondo} </p>
    </div>
  )

  }
export default Figura