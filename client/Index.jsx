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
          <div className="row">
            <div className="col-lg-8">
              <h1>Interactive Light!</h1>
              <p>Interactive web-controlled light with Raspberry Pi, Meteor and React.js</p>
              <p>Built with Raspberry pi, Meteor and React.js, of course, with NeoPixel LED strip. This project requires understanding of belisted components. Not recommended for beginners.</p>

              <hr />

              <h5>Bill Of Material</h5>
              <ul>
                <li>Raspberry Pi</li>
                <li>NeoPixel LED Strip</li>
                <li>Shaded Spherical Glass</li>
                <li>Styrofoam Sphere</li>
                <li>Extruded PVC Foam Sheet (포맥스)</li>
                <li>Emtpy Toilet Paper Roll (휴지심)</li>
              </ul>

              <p><a className="btn btn-primary btn-lg" href="https://github.com/team-flit/raspi-light-react-meteor" target="_blank" role="button">Learn more &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img className="img-rounded img-responsive" style={{width: '100%'}} src="raspi-light-pic.jpg" />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
