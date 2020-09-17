function Welcome(props) {  
    return (
    <div>
        <h1>Greetings {props.name} !</h1>
        <p className="card-text font-italic">Welcome to React introduction tutorial.</p>
    </div>
    )
}

// Clock Component

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
       this.timerID =  setInterval(

            // /w bind func.
            // function () {
            //     this.tick();
            // }.bind(this), 1000);

            // /w arrow func.
            () => this.tick(),
            1000
       );
    }

    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });      
    }

    render() {
        return (
            <h3>Il est {this.state.date.toLocaleTimeString()}</h3>
        );
    }
}

// Incrementor Component

class Incrementor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {start: props.start}
    }

    componentDidMount() {
        this.timerID = window.setInterval(
            function() {
                this.tick();
            }.bind(this),
            1000
        );
    }

    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }

    tick() {
        // this.setState(function (state, props) {
        //     return {start: state.start + props.step}
        // });

        /**
         * In React parenthesis are used in arrow func. to return obj.!!
         */
        this.setState((state, props) => ({
            start: state.start + props.step
          }));
    }

    render() {
        return (
            <div>
                <h3>Increment: {this.state.start}</h3>
            </div>
        )
    }
}

Incrementor.defaultProps = {
    start: 0,
    step: 1
};


class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Welcome name="Max" className="card-title" />
                <Clock />
                <Incrementor />
                <Incrementor start={2} step={2}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

