Light = React.createClass({
  getInitialState() {
    return {
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 100
      },
      hex: '#FF0000'
    }
  },

  getRgba() {
    var color = this.state.color;
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha/100})`;
  },

  setColor(data) {
    let name = $(data.input).attr('name')
    var color = _.extend({}, this.state.color);
    color[name] = data.from;
    this.setState({ color: color });
  },

  changeColor(event) {
    console.log(event.target.value);
  },

  componentDidMount() {
    let options = { min: 0, max: 255, from: 100, onChange: this.setColor };
    $(".slider").ionRangeSlider(options);
    $('.alphaSlider').ionRangeSlider(_.extend(options, { max: 100 }));
  },

  render() {
    return (
      <div className="container">
        <h3>Color
          <span className="label label-pill label-default pull-right" style={{backgroundColor: this.getRgba()}}>SAMPLE COLOR
          </span>
        </h3>
        <hr/>

        <div className="row">
          <div className="col-md-3">
            <label>RED</label>
            <input type="text" name="red" className="slider"/>
          </div>
          <div className="col-md-3">
            <label>GREEN</label>
            <input type="text" name="green" className="slider" />
          </div>
          <div className="col-md-3">
            <label>BLUE</label>
            <input type="text" name="blue" className="slider" />
          </div>
          <div className="col-md-3">
            <label>BRIGHTNESS</label>
            <input type="text" name="alpha" className="alphaSlider" />
          </div>
        </div>

        <hr />
        <LightButtons color={this.state.color}/>
      </div>
    )
  }
});
