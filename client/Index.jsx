Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  React.render(<App />, document.getElementById("render-target"));
});

App = React.createClass({
  render() {
    return (
      <div>
        <Toolbar />
        <Index />
        <Light />
        <Footer />
      </div>
    )
  }
});

Index = React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Raspi Light Meteor!</h1>
          <p>Interactive web-controlled light with Raspberry Pi, Meteor and React.js</p>
          <p><a className="btn btn-primary btn-lg" href="https://github.com/colus001/raspi-light-meteor" target="_blank" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
    )
  }
});
