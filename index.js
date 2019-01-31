const myButton = React.createElement('button', null, 'Do All The Things!');
console.log(JSON.stringify(myButton));

const header =(properties) => {

    const { place } = properties;
}

const app = React.createElement("div", null,
   "Things I need to do:",
    React.createElement("li", null, "Climb Mt. Everest"),
    React.createElement("li", null, "Run a marathon!"),
    React.createElement("li", null, "Learn React!"),
    React.createElement("li", null, "Travel the world!"),
)


ReactDOM.render(myButton, document.getElementById('app'));

ReactDOM.render(app, document.getElementById('root'));


