
class StopwatchBTn extends React.Component {
    constructor(props) {
        super(props),
        this.state = {n: 0, isTimerOn: null};
        this.increment = this.increment.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
    }

    componentDidMount() {
      this.play(); 
    }

    componentWillUnmount() {
        this.pause();
    }

    increment() {
        this.setState((state) => ({n: state.n + 1})
        );   
    }

    pause() {
        window.clearInterval(this.state.isTimerOn);
        this.setState({
            isTimerOn: null
        });
    }

    play() {
        this.setState({
            isTimerOn: window.setInterval(this.increment, 1000)
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.pause}>
                    Pause
                </button>
                <button className="btn btn-primary" onClick={this.play}>
                    Play
                </button>
                <p>Time elapsed: {this.state.n} seconds</p>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Timer</h2>
                <StopwatchBTn />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)