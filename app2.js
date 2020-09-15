function Welcome2(props) {
    return (
        <h1>Welcome 2: {props.name}</h1>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    };

    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            {time: new Date()}
        );
    }

    render() {
        return (
            <h2>À Paris il est : {this.state.time.toLocaleTimeString()}</h2>
        );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: props.start};
    }

    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.increment(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    increment() {
        this.setState((state, props) => (
            {n: state.n + 1 * props.step}
        ));
    }

    render () {
        return (
            <h3>Timer: {this.state.n}</h3>
        );
    }
}

Timer.defaultProps = {
    step: 1,
    start: 5
}

function PropTest(props) {
    return (
        <div>
            <p>coucou {props.user.name}</p>
            <p>kikoo {props.user.rank}</p>
        </div>

    );
}

function App(props) {
    return (
        <React.Fragment>
            <Welcome2 name="React2"/>
            <Clock/>
            <Timer/>
            <Timer start={25} step={5}/>
            <PropTest user={{name: "Franky", rank:"shogun"}}/>
        </React.Fragment>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root2'));