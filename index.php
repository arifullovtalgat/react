<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://fb.me/react-0.14.3.js"></script>
    <script src="https://fb.me/react-dom-0.14.3.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
<style>

</style>
<script type="text/babel">
    class ColorBox extends React.Component {
        constructor (props){
            super(props);
            this.state = {
                color:"red"
            };

           // this.handleMyEvent = this.handleMyEvent.bind(this)
        }

        handleMyEvent(e) {
            e.preventDefault();
            var color = document.querySelector("#select_color");

            console.log('lala');
            this.setState({
                color:color.value
            });
        }

        componentDidMount() {
            var btn = document.querySelector("#send");
            btn.addEventListener("click", this.handleMyEvent.bind(this))
        }

        render() {
            var boxStyle = {
                width: 200,
                height: 200,
                backgroundColor: this.state.color,
            };

            return <p style={boxStyle}/>
        }
    }

    var destination = document.querySelector('#container');
    ReactDOM.render(
        <div>
            <ColorBox color="red"/>
            <input id="select_color" type="text"/><a id="send">send</a>
        </div>,
        destination
    );
</script>
    <div id="container"></div>
</body>
</html>