import React from "react";
import { format } from "morgan";
import "./Auth.scss";
import twitterlogo from "./sign_in_twitter.png";
import toplogo from "./landing-page.png";
import cardimg1 from "./images/cardimg1.jpg";
import cardimg2 from "./images/cardimg2.jpg";
import cardimg3 from "./images/cardimg3.jpg";
import div1 from "./images/div1.png";
import div2 from "./images/div2.png";
import divimg from "./images/divimg.png";
import engage from "./images/engage.png";
import brandLogo from "./images/Untitled.png";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataState: null };
  }
  render() {
    let lout = document.getElementById("logout");
    if (lout) {
      document.getElementById("home_page").style.backgroundColor = "black";
      //document.getElementById("home_page").style.position = "fixed";
      lout.style.backgroundColor = "black";
      lout.style.display = "block";
      lout.style.position = "fixed";
    }
    return (
      <div id="home_page">
        {this.state.dataState}
        {/* <a
          id="login"
          href="http://localhost:5000/login"
          style={{ display: this.state.dataState !== null ? "none" : "block" }}
        >
          Log In
        </a>
        <a
          id="logout"
          href="http://localhost:5000/logout"
          style={{ display: this.state.dataState !== null ? "block" : "none" }}
        >
          Log Out
        </a> */}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://pro-organiser1.firebaseio.com/auth.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          let ds = (
            <div className="logout_block">
              <a id="logout" href="http://localhost:5000/logout">
                Log Out
              </a>
            </div>
          );
          let userinfo = Object.values(data)[0].profile;
          this.setState({ dataState: ds });
          this.props.authHandler();
          this.props.infoHandler(userinfo);
        } else {
          let ds = (
            <div id="login_div">
              {/* <div>
                <img id="toplogo" src={toplogo} alt="toplogo" />
              </div>
              <div>
                <a id="login" href="http://localhost:5000/login">
                  <img id="twitterlogo" src={twitterlogo} alt="twitter" />
                </a>
              </div>
              <div className="login_text">Lets get your account set up!</div> */}

              <div className="landing_body">
                <div className="navDiv">
                  <div>
                    <img src={brandLogo} alt="logo" />
                  </div>
                  <div>Post.It.</div>
                </div>
                <div className="firstDiv">
                  <div className="divImage">
                    <img src={div1} alt="first" />
                  </div>
                  <div className="divText">
                    Simpler social media tools for
                    <br />
                    authentic engagement
                    <br />
                    <a id="login" href="http://localhost:5000/login">
                      <img id="twitterlogo" src={twitterlogo} alt="twitter" />
                    </a>
                  </div>
                </div>

                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> */}
                {/* <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  > */}
                {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0 n-links">
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style="font-size: large;">Customers <span
                            class="sr-only">(current)</span></a>

                </li>
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style="font-size: large;">Resources</a>

                </li>
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style="font-size: large;" tabindex="-1"
                        aria-disabled="true">Products</a>

                </li>
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style="font-size: large;">About</a>

                </li>
            </ul> */}
                {/* <form class="form-inline nav-item">
                <a href="login/Login-form.html"><button class="btn btn-outline-primary mr-3 btn-lg">Login</button>
                </a>
                <a href="login/signup-form.html"> <button class="btn btn-primary btn-lg">Create an
                        account</button>
                </a>
    
            </form> */}
                {/* </div> */}
                {/* </nav> */}

                {/* <div className="container-fluid cont shadow text-center">
                  <img
                    src={div1}
                    className="rounded float-right img-fluid"
                    width={450}
                    height={450}
                    alt="..."
                  />
                  <br />
                  <h1 id="title">Post It!</h1>
                  <br />
                  <h2>
                    <b>
                      Simpler social media tools for
                      <br />
                      authentic engagement
                    </b>
                  </h2>
                  <br />
                  <h5>
                    Tell your brand’s story and grow your audience with a
                    publishing, analytics, and engagement platform you can
                    trust.
                  </h5>
                  <br />

                  <div>
                    
                  </div>

                  <br />
                  <br />
                  <br />
                  <h6 style={{ opacity: "0.7" }}>
                    In a world of clutter and mixed sentiment, does your brand
                    stand out?
                  </h6>
                  <br />
                </div>
                <div className="container-fluid text-center cont2">
                  <img
                    src={divimg}
                    className="rounded float-left img-fluid"
                    width={350}
                    height={300}
                    alt="..."
                  />
                  <h2 style={{ paddingTop: "40px" }}>
                    Visually plan and schedule your
                    <br />
                    social media campaigns
                  </h2>
                  <br />
                  <h5>
                    Coordinate creative campaigns to drive engagement on
                    social.Queue up thumb-stopping
                    <br />
                    content across your social channels, and enjoy up-to-date
                    tools
                  </h5>
                  <br />
                  <a href="#"><h6>Learn More</h6></a>
                </div> */}

                {/* <div className="card-deck">
                  <div className="card col-md-4">
                    <img
                      src={cardimg2}
                      className="card-img-top"
                      height={200}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Our service</h5>
                      <p className="card-text">
                        Behind a record-breaking social media capaign.
                      </p>
                      <p className="small-text">
                        <a href="#">Learn more</a>
                      </p>
                    </div>
                  </div>
                  <div className="card col-md-4">
                    <img
                      src={cardimg1}
                      className="card-img-top"
                      height={200}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Twitter</h5>
                      <p className="card-text">
                        Best brands embracing mames on Twitter
                      </p>
                      <p className="small-text">
                        <a href="#">Learn more</a>
                      </p>
                    </div>
                  </div>
                  <div className="card col-md-4">
                    <img
                      src={cardimg3}
                      className="card-img-top"
                      height={200}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Social Media</h5>
                      <p className="card-text">
                        Why social commerce will rule socail media in 2020
                      </p>
                      <p className="small-text">
                        <a href="#">Learn more</a>
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="container-fluid cont2">
                  <img
                    src={engage}
                    className="rounded float-right img-fluid"
                    width={350}
                    height={300}
                    alt="..."
                  />
                  <h2 style={{ paddingTop: "40px" }}>
                    Build and grow your brand on <br />
                    our platform easily
                  </h2>
                  <br />
                  <h5>
                    Engage with the most important comments faster and gain
                    customer trust.
                    <br />
                    Get in-depth insights to grow your reach, engagement, and
                    sales.
                  </h5>
                  <br />
                  <a href="#"><h6>Learn More</h6></a>
                </div>
                <div className="container-fluid text-center cont2" id="cont3">
                  <img
                    src={div2}
                    className="rounded float-left img-fluid"
                    width={350}
                    height={300}
                    alt="..."
                  />
                  <br />
                  <h1 style={{ paddingTop: "80px" }}>"Post It!</h1>
                  <h2>
                    has made sharing our story and <br />
                    building our brand on social media so much easier."
                  </h2>
                  <br />
                  <br />
                  <h5>#feedback</h5>
                </div> */}

                {/* <div className="container-fluid bg-light">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            <h4>Products</h4>
                          </th>
                          <th scope="col">
                            <h4>Company</h4>
                          </th>
                          <th scope="col">
                            <h4>Support</h4>
                          </th>
                          <th scope="col">
                            <h4>Free resources</h4>
                          </th>
                          <th scope="col">
                            <h4>Transperancy</h4>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Publish</td>
                          <td>Customers</td>
                          <td>Help Center</td>
                          <td>Browse Extension</td>
                          <td>Culture Blog</td>
                        </tr>
                        <tr>
                          <td>Analyze</td>
                          <td>Community</td>
                          <td>Webinars</td>
                          <td>Resource Center</td>
                          <td>Revenue Dashboard</td>
                        </tr>
                        <tr>
                          <td>Pricing</td>
                          <td>Non Profits</td>
                          <td>Tweet @ Us</td>
                          <td>Content Library</td>
                          <td>Product Roadmap</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="footer">
                    <img
                      src={Untitled}
                      className="rounded float-left img-fluid"
                      width={50}
                      height={50}
                      alt="..."
                    />
                    <h1 id="title1" className="float-left">
                      Post It!
                    </h1>
                  </div>
                </div> */}
                {/* Optional JavaScript */}
                {/* jQuery first, then Popper.js, then Bootstrap JS */}
                {/* 
    
     */}
              </div>
            </div>
          );
          this.setState({ dataState: ds });
        }
      });
  }
}

export default Auth;
