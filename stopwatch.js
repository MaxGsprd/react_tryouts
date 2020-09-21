
class StopwatchBTn extends React.Component {
    constructor(props) {
        super(props),
        this.state = {n: 0, timer: null};
        this.increment = this.increment.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
    }

    componentDidMount() {
      this.pause(); 
    }

    componentWillUnmount() {
        window.clearInterval(this.state.timer);
    }

    increment() {
        this.setState((state) => ({n: state.n + 1})
        );   
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null
        });
    }

    play() {
        window.clearInterval(this.timer);
        this.setState({
            timer: window.setInterval(this.increment, 1000)
        });
    }

    render() {
        return (
            <div>
                {this.state.timer ?
                <button className="btn btn-danger" onClick={this.pause}>
                    Pause
                </button>:
                <button className="btn btn-primary" onClick={this.play}>
                    Play
                </button>
            }
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