class Welcome extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.children}</p>
            <hr/>
        </div>);
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componantWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>Il est {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: props.start}
    }

    componentDidMount () {
        this.timerID = setInterval(
            () => this.incrementStart(),
            1000);
    }

    componantWillUnmount () {
        clearInterval(this.timerID);
    }

    incrementStart() {
       this.setState((state, props) => ({n: state.n + props.step}))
    }

    render() {

        return (
            <React.Fragment>
                <h2>Timer : {this.state.n}</h2>
            </React.Fragment>
        )
    }
}

Increment.defaultProps = {
    start: 0,
    step: 1
}

function App () {
    return (
    <React.Fragment>
        <Welcome name="Luffy">Captain</Welcome>
        <Welcome name="Zoro">First-mate</Welcome>
        <Clock/>
        <Increment start={10}/>
        <Increment start={0} step={10}/>
    </React.Fragment>);
}

ReactDOM.render(<App/>, document.querySelector('#root'));
