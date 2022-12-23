import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [imageInput, setImageInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [result, setResult] = useState();
  

  async function onSubmit(event) {
    event.preventDefault();
    
    setResult(<div>Carregando...</div>);
    console.log('chamando imagem');
    console.log('image: '+imageInput);
    console.log('image size: '+sizeInput)
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageInput ,size: sizeInput}),
    });
    const data = await response.json();
    const imageURL = data.result[0].url;
    const imagemGerada = (
        <img src={imageURL} className="petImg"/>
        );
    
    setResult(imagemGerada);
    setImageInput(imageInput);
  }

  return (
    <div>
      <Head>
        <title>Imagens pelo OpenAI - Eliane Meijomil</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Get an Image</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="imagem"
            placeholder="Enter an description"
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />
          <label for="small">
            <input 
                type="radio" 
                value="256x256" 
                id="small" 
                name="size" 
                onChange={(e) => setSizeInput(e.target.value)}
            />
            small
          </label>
          <label for="medium">
            <input 
                type="radio" 
                value="512x512" 
                id="medium" 
                name="size" 
                onChange={(e) => setSizeInput(e.target.value)}
            />
            medium
          </label>
          <label for="large">
            <input 
                type="radio" 
                value="1024x1024" 
                id="large" 
                name="size" 
                onChange={(e) => setSizeInput(e.target.value)}
            />
            large
          </label>
          <input type="submit" value="Get Image" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
