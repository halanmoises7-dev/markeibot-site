import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './Roleta.css';

const Roleta = () => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  
  const [frases, setFrases] = useState("PRÊMIO MASTER\nBÔNUS EXTRA\nTENTE NOVAMENTE\nSORTE GRANDE");
  const [cor1, setCor1] = useState("#0052FF");
  const [cor2, setCor2] = useState("#0A0E1A");
  const [resultado, setResultado] = useState("SISTEMA ONLINE");
  const [estaMudo, setEstaMudo] = useState(false);
  const [rotacionando, setRotacionando] = useState(false);
  const [anguloAtual, setAnguloAtual] = useState(0);

  useEffect(() => {
    desenharRoleta();
  }, [frases, cor1, cor2]);

  const iniciarAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
  };

  const playTick = () => {
    if (estaMudo || !audioCtxRef.current) return;
    const t = audioCtxRef.current.currentTime;
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    const filter = audioCtxRef.current.createBiquadFilter();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.08);
    filter.type = 'lowpass'; filter.frequency.value = 800;
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    osc.connect(filter); filter.connect(gain); gain.connect(audioCtxRef.current.destination);
    osc.start(t); osc.stop(t + 0.06);
  };

  const playVictory = () => {
    if (estaMudo || !audioCtxRef.current) return;
    const tempo = audioCtxRef.current.currentTime;
    const notas = [261.63, 329.63, 392.00, 523.25];
    notas.forEach((freq, i) => {
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      const filter = audioCtxRef.current.createBiquadFilter();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, tempo + (i * 0.06));
      filter.type = 'lowpass';
      filter.frequency.value = 2500;
      gain.gain.setValueAtTime(0, tempo + (i * 0.06));
      gain.gain.linearRampToValueAtTime(0.12, tempo + (i * 0.06) + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, tempo + 1.5);
      osc.connect(filter); filter.connect(gain); gain.connect(audioCtxRef.current.destination);
      osc.start(tempo + (i * 0.06)); osc.stop(tempo + 2);
    });
  };

  const desenharRoleta = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const listaFrases = frases.split('\n').filter(f => f.trim() !== "");
    const num = listaFrases.length;
    if (num === 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    const arco = (2 * Math.PI) / num;
    const raio = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    listaFrases.forEach((frase, i) => {
      const aIni = i * arco - Math.PI / 2;
      ctx.beginPath();
      ctx.fillStyle = i % 2 === 0 ? cor1 : cor2;
      ctx.moveTo(raio, raio);
      ctx.arc(raio, raio, raio, aIni, aIni + arco);
      ctx.fill();

      ctx.save();
      ctx.translate(raio, raio);
      ctx.rotate(aIni + arco / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "white";
      ctx.font = "bold 22px 'Segoe UI', sans-serif"; 
      const txt = frase.length > 14 ? frase.substring(0, 12) + ".." : frase;
      ctx.fillText(txt.toUpperCase(), raio - 45, 8); 
      ctx.restore();
    });
  };

  const girar = () => {
    const listaFrases = frases.split('\n').filter(f => f.trim() !== "");
    if (rotacionando || listaFrases.length < 2) return;

    iniciarAudio();
    setRotacionando(true);
    setResultado("SORTEANDO...");

    const voltas = 10 + Math.random() * 5;
    const extra = Math.random() * 360;
    const totalGiro = voltas * 360 + extra;
    const tempoGiro = 4000;
    const inicioGiro = performance.now();
    const anguloBase = anguloAtual % 360;

    let ultimoIndiceSom = -1;
    const grausPorFatia = 360 / listaFrases.length;

    const animar = (agora) => {
      const progresso = Math.min((agora - inicioGiro) / tempoGiro, 1);
      const easing = 1 - Math.pow(1 - progresso, 4);
      const anguloFrame = anguloBase + totalGiro * easing;
      
      setAnguloAtual(anguloFrame);

      const indiceSom = Math.floor(anguloFrame / grausPorFatia);
      if (indiceSom !== ultimoIndiceSom) {
        playTick();
        ultimoIndiceSom = indiceSom;
      }

      if (progresso < 1) {
        requestAnimationFrame(animar);
      } else {
        setRotacionando(false);
        const finalCalculado = anguloFrame % 360;
        const indiceVencedor = Math.floor((360 - (finalCalculado % 360)) % 360 / (360 / listaFrases.length));
        setResultado(`🏆 ${listaFrases[indiceVencedor].toUpperCase()}`);
        playVictory();
        confetti({ 
          particleCount: 150, 
          spread: 80, 
          origin: { y: 0.7 },
          colors: [cor1, cor2, '#ffffff']
        });
      }
    };

    requestAnimationFrame(animar);
  };

  return (
    <div className="roleta-page">
      <div className="area-fundo"></div>
      
      {/* Botão Flutuante Inferior Esquerdo */}
      <Link to="/" className="botao-voltar-fixo">
        <span className="seta-voltar">←</span> INÍCIO
      </Link>

      <h1 className="titulo-neon">MARKEIBOT <span className="destaque">ROLETA</span></h1>

      <div className="layout">
        <div className="roleta-wrapper">
          <div className="marcador"></div>
          <canvas 
            ref={canvasRef} 
            width="500" height="500" 
            id="canvasRoleta"
            style={{ transform: `rotate(${anguloAtual}deg)` }}
          ></canvas>
        </div>

        <div className="controles">
          <div className="header-controles">
            <h3>ITENS DO SORTEIO</h3>
            <button onClick={() => { iniciarAudio(); setEstaMudo(!estaMudo); }} className="btn-mudo-neon">
              {estaMudo ? "🔈" : "🔊"}
            </button>
          </div>
          
          <div className="editor-container">
            <div className="numeracao-wrapper">
              <div className="numeracao">
                {frases.split('\n').map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
            </div>
            <textarea value={frases} onChange={(e) => setFrases(e.target.value)} spellCheck="false" wrap="off" />
          </div>

          <div className="container-cores">
            <label className="label-cores">MUDAR CORES DA ROLETA</label>
            <div className="seletor-cores">
              <div className="inputs-cor">
                <input type="color" value={cor1} onChange={(e) => setCor1(e.target.value)} />
                <input type="color" value={cor2} onChange={(e) => setCor2(e.target.value)} />
              </div>
              <div className="botoes-reset-agrupados">
                <button onClick={() => { setCor1("#0052FF"); setCor2("#0A0E1A"); }} className="btn-reset-neon">resetar cores</button>
                <button onClick={() => !rotacionando && setAnguloAtual(0)} className="btn-reset-neon">resetar roleta</button>
              </div>
            </div>
          </div>

          <button onClick={girar} disabled={rotacionando} id="btnGirar">INICIAR SORTEIO</button>
          
          <div className="resultado-container">
            <div id="resultado">{resultado}</div>
          </div>
        </div>
      </div>
      
      <footer>&copy; Halan Moisés Mídia & Web. Todos os direitos reservados.</footer>
    </div>
  );
};

export default Roleta;