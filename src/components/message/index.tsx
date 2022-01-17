import React from 'react';
import styles from './styles.module.scss';

interface MessageProps {
    "theme": "red" | "green" | "yellow" | "blue" ;
    "title": string;
    "messages": {
        "phrase": string;
        "reference": string;
    }[]
}

interface MessageState{
    "currentMessage": number;
    "toggled": boolean;
    "theme": string;
}

class Message extends React.Component<MessageProps, MessageState> {

    constructor(props: MessageProps){
        super(props);
        this.state = {
            "currentMessage": 0,
            "toggled": false,
            "theme": styles.red
        }
    }

    /**
     * Sorteia um número aleatório entre 0 e o tamanho do array de mensagens
     */
    private randomizeMessage(){
        const { messages } = this.props;
        const { currentMessage } = this.state;
        const random = Math.floor(Math.random() * messages.length);
        if(random === currentMessage){
            this.randomizeMessage();
        }else{
            this.setState({
                "currentMessage": random
            });
        }
    }

    componentDidMount(){        
        switch(this.props.theme){
            case "red":
                this.setState({
                    "theme": styles.red
                });
                break;
            case "green":
                this.setState({
                    "theme": styles.green
                });
                break;
            case "yellow":
                this.setState({
                    "theme": styles.yellow
                });
                break;
            case "blue":
                this.setState({
                    "theme": styles.blue
                });
                break;
        }
    }

    render(){
        if(this.state.toggled){
            return(
                <div
                    className={`${styles.message} ${this.state.theme}`}
                >                    
                    <p
                        className={styles.phrase}
                    >
                        {this.props.messages[this.state.currentMessage].phrase}
                    </p>
                    <p
                        className={styles.reference}
                    >
                        {this.props.messages[this.state.currentMessage].reference}
                    </p>                    
                </div>
            )
        }        
        else{
            return(
                <div 
                    className={`${styles.message} ${this.state.theme}`}
                    onClick={() => {
                        this.randomizeMessage();
                        this.setState({toggled: true})}
                    }
                >
                    <h1
                        className={styles.title}
                    >
                        {this.props.title}
                    </h1>                    
                </div>
            )
        }

    }

}


export { Message };