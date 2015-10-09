Footer = React.createClass({
  render() {
    return (
      <div className="container">
        <footer className="pull-right">
          <p>&copy; FLIT {new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
})
