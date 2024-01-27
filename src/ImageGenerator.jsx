import React, { useState } from 'react';

const ImageGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const canvasRef = React.createRef();

  const generateImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = '30px Arial';
    context.fillText(inputValue, 50, 50);
  };

  return (
    <div>
      <form>
        <label htmlFor="textInput">Entrer un nombre :</label>
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={generateImage}>
          Générer Image
        </button>
      </form>

      <canvas
        ref={canvasRef}
        width="200"
        height="100"
        style={{ border: '1px solid #000' }}
      ></canvas>
    </div>
  );
};

export default ImageGenerator;