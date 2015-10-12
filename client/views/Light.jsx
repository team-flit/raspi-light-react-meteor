Light = React.createClass({
  getInitialState() {
    return {
      color: {
        red: _.random(0, 255),
        green: _.random(0, 255),
        blue: _.random(0, 255),
        alpha: 100
      },
      hex: '#FF0000'
    }
  },

  generateRandomColor() {
    this.setState({
      color: {
        red: _.random(0, 255),
        green: _.random(0, 255),
        blue: _.random(0, 255),
      }
    });
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
    let colors = this.state.color;

    $(".slider").each(function () {
      let $slider = $(this);
      _.each(colors, (color, key) => { if ( $slider.hasClass(key) ) options.from = color; });
      $slider.ionRangeSlider(options);
    })
    $('.alpha.slider').ionRangeSlider(_.extend(options, { max: 100 }));
  },

  render() {
    return (
      <div className="container">
        <h3>Color</h3>
        <hr/>

        <div className="row">
          <div className="col-md-3">
            <label>COLOR PICKER</label><br/>
            <label className="label label-default" style={{backgroundColor: 'red'}}>RED</label>
            <input type="text" name="red" className="red slider" />
            <label className="label label-default" style={{backgroundColor: 'green'}}>GREEN</label>
            <input type="text" name="green" className="green slider" />
            <label className="label label-default" style={{backgroundColor: 'blue'}}>BLUE</label>
            <input type="text" name="blue" className="blue slider" />
            <label className="label label-default">BRIGHTNESS</label>
            <input type="text" name="alpha" className="alpha slider" />
          </div>
          <div className="col-md-3">
            <label>PREVIEW</label>
            <div style={{backgroundColor: this.getRgba(), width: 200, height: 200, borderRadius: 20}}></div>
          </div>

          <div className="col-md-6">
            <LightButtons color={this.state.color}/>
          </div>

        </div>
      </div>
    )
  }
});
