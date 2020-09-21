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
         * In React, parenthesis are used in arrow func. to return obj.!!
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

// IncrementBtn component
class IncrementBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: 0};
        this.className = {BtnColor: props.className}
        this.incrementN = this.incrementN.bind(this);
    }

    incrementN() {
        this.setState( () => (
            {n: this.state.n + 1}
        ));
    }

    render () {
        return (
            <div>
                <button type="button" onClick={this.incrementN} className={this.className.BtnColor}>
                    Click : {this.state.n}
                </button>
            </div>
        )
    }   
}

// ToggleBtn component
class ToggleBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggled: false};
        this.className = {color: props.className}
        // this.toggle = this.toggle.bind(this); // initié lors de l'appel de l'event ici
    }

    toggle(e) {
        e.preventDefault();
        this.setState((state) => (
           {isToggled: !state.isToggled}
        ));
    }

    render () {
        return (
            <div>
                <button type="button" onClick={this.toggle.bind(this)} className={this.className.color}>
                    {this.state.isToggled ? "On": "Off"}
                </button>
            </div>
        )
    }   
}

// App Component
class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Welcome name="Max" className="card-title" />
                <Clock />
                <Incrementor />
                <Incrementor start={2} step={2}/>
                <IncrementBtn className="btn btn-primary"/>
                <ToggleBtn className="btn btn-danger"/>
            </React.Fragment>
        );
    }
}
// ReactDOM render
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

