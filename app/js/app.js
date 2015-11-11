var Navbar = React.createClass({
  render: function() {
    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand page-scroll" href="#page-top">Politihub</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                          <a className="page-scroll" href="#about">About</a>
                      </li>
                      <li>
                          <a href="#profile">Profile</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#sports">Candidates</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#contact">Issues</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
});

var MainElement = React.createClass({
  render: function() {
    return (
        <div className="mainelement">
            <Navbar />
            <Header />
        </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
        <header>
        <div className="header-content-inner">
              <h1>Welcome to Politihub!</h1>
              <hr className="light">
              <p>The political hub that helps you make decisions!</p>
              </hr>
          </div>
          </header>
    );
  }
});


ReactDOM.render(
  <MainElement />,
  document.getElementById('content')
);
