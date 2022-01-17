import React from 'react';
import { Message } from './components/message';
import styles from './styles.module.scss';

import Messages from './messages';

function App() {
  var messages = Messages();
  var scroll = React.createRef<HTMLDivElement>();


  return (    
    <div className={
      styles.app
    }>
      <header className="App-header">
        <h1>Do que você precisa hoje?</h1>
      </header>
      <div 
        className={styles.content}
        ref={scroll}
      >
        <Message
          theme="red"
          messages={messages.amor}
          title="Amor"
        />
        <Message
          theme="green"
          messages={messages.paciencia}
          title="Paciência"
        />
        <Message
          theme="yellow"
          messages={messages.felicidade}
          title="Felicidade"
        />
        <Message
          theme="blue"
          messages={messages.paz}
          title="Paz"
        />    
      </div>    
      <button 
        className={styles.fab}
        onClick={() => {
          // scroll down 90vh
          var scrollTop = (window.innerHeight * 0.9) + (scroll.current?.scrollTop || 0);
          scroll.current?.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }}
      >
        ↓       
      </button>  
    </div>
  );
}

export default App;
