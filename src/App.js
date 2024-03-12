import Title from './components/Title';
import Counter from './components/Counter';

import Imagem from './assets/IMAGE.jpeg';

import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00");

  return (
    <div className='App' style={{backgroundImage: `url(${Imagem})`}}>
      <div className='container'>
        <Title title='Contagem Regressiva Para 2025' />
        <div className='contdown-container'>
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
        <h4>Aproveite ao máximo, a vida é curta!</h4>
      </div>
    </div>
  );
}

export default App;
