LightButtons = React.createClass({
  getInitialState() {
    console.log(this.props.color);
    return {};
  },

  light(options) {
    options = _.defaults(options || {}, { mode: 'off', color: this.props.color });
    console.log(options);
    Meteor.call('light', options);
  },

  render() {
    return (
      <div>
        <label>CONTROL</label>
        <div className="jumbotron">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3">
                <button
                  className="btn btn-primary"
                  onClick={this.light.bind(this, { mode: 'on' })}>Color On</button>
              </div>

              <div className="col-lg-3">
                <button
                  className="btn btn-primary"
                  onClick={this.light.bind(this, { mode: 'breath' })}>Breath</button>
              </div>

              <div className="col-lg-3">
                <button
                  className="btn btn-primary"
                  onClick={this.light.bind(this, { mode: 'rainbow' })}>Rainbow</button>
              </div>

              <div className="col-lg-3">
                <button
                  className="btn btn-danger"
                  onClick={this.light.bind(this, {})}>Turn Off</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
