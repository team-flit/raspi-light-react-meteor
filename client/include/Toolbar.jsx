Toolbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#">Raspi Light</a>
        <ul className="nav nav-pills">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
});
