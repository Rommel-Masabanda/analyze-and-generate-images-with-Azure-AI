import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyzeClick = async () => {
    setIsLoading(true);
    const features = ['Categories', 'Description', 'Color'];
    const analysisResult = await analyzeImage(imageUrl, features);
    setResult(analysisResult);
    setIsLoading(false);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const DisplayResults = ({ result }) => {
    if (!result) return null;
    return (
      <div>
        <h2>Resultados del análisis:</h2>
        <p>{JSON.stringify(result, null, 2)}</p>
      </div>
    );
  };

  return (
    <>
      <h1>Visión por computadora</h1>
      <p>Utiliza este servicio para mejorar la usabilidad de tu sitio web, generamos textos descriptivos para tus imagenes atraves de Inteligencia Artificial</p>
      <br/>
      <p>Ingresa la URL de tu imagen</p>
      <input type="text" name="name" onChange={handleImageUrlChange} />
      {isLoading ? (
        <p>Analizando imagen...</p>
      ) : (
        <button onClick={handleAnalyzeClick}>Analizar</button>
      )}
      <DisplayResults result={result} />
    </>
  );
}

export default App;