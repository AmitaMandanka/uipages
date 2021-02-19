import React, { Component } from 'react';
import abc from './Images/Bild11.jpg';
import './responsiveweb.css';
import a1 from './Images/images7.jpg';
import a2 from './Images/images8.jpg';
import a3 from './Images/images9.jpg';
import a4 from './Images/images10.jpg';
import a5 from './Images/images11.jpg';
import a6 from './Images/images12.jpg';
import p1 from './Images/person1.jpg';
import p2 from './Images/person2.jpg';
import p3 from './Images/person3.jpg';

class Responsiveweb extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div data-spy="scroll" data-target=".navbar" data-offset="50">
                <div className = "bgimg" >
                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand text-warning font-weight-bold" href="#">MY App</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse text-center" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">PORTFOLIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">TEAM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">CONTACT</a>
                                </li>
                        </ul>
                    </div>
                    </nav>
                    <div class="container text-center text-light" style ={{ paddingTop: "250px"}}>
                        <h3> Welcome to our Studio</h3>
                        <h1 style={{fontWeight: "bold", fontSize: "62px"}}>IT'S NICE TO MEET YOU</h1>
                        <button className= "btn btn-warning text-white bt-lrg"> SUBSCRIBE</button>
                    </div>
                </div>

                <section className ="container text-center servicepart ">
                    <h1 style={{marginTop:"100px", fontSize:"50px", fontWeight: 'bold'}}>SERVICES</h1>
                    <p>lorem ipsum dollar sit amet consecsetdor</p>
                    
                    <div className = "row ">
                        <div className ="col-lg-4 col-md-4 col-sm-4 col-12 d-block margin-auto p-4">
                            <div className =" d-block margin-auto  mt-5 ">
                                <i className = "fa fa-shopping-cart fa-3x bg-warning pt-4  imgsetting mb-4"></i>
                                {/* copy font awasome cdn link to html file from w3school */}
                                <h2> E- Commerce</h2>
                                <p> The Moon is a barren, rocky world without air and water.
                                It has dark lava plain on its surface. The Moon is filled wit craters.
                                It has no light of its own. It gets its light from the Sun.</p>
                            </div>  
                        </div>                     
                        <div className ="col-lg-4 col-md-4 col-sm-4 col-12 d-block margin-auto p-4">
                            <div className =" d-block margin-auto  mt-5">
                                <i className = "fa fa-desktop fa-3x bg-warning pt-4  imgsetting mb-4"></i>
                                {/* copy font awasome cdn link to html file from w3school */}
                                <h2> Responsive design</h2>
                                <p> The Moon is a barren, rocky world without air and water.
                                It has dark lava plain on its surface. The Moon is filled wit craters.
                                It has no light of its own. It gets its light from the Sun.</p>
                            </div>  
                        </div>                      
                        <div className ="col-lg-4 col-md-4 col-sm-4 col-12 d-block margin-auto p-4">
                            <div className =" d-block margin-auto mt-5">
                                <i className = "fa fa-lock fa-3x bg-warning pt-4 mb-4 imgsetting"></i>
                                {/* copy font awasome cdn link to html file from w3school */}
                                <h2> Web Security</h2>
                                <p> The Moon is a barren, rocky world without air and water.
                                It has dark lava plain on its surface. The Moon is filled wit craters.
                                It has no light of its own. It gets its light from the Sun.</p>
                            </div>  
                        </div>                       
                    </div>
                </section> 
                <section className= "container bg-light portfolio mt-5 text-center ">
                        <h1 style={{fontSize: "50", fontWeight: "bold"}}>PORTFOLIO</h1>
                        <p>lorem ipsum dollar sit amet consecsetdor</p>
                        <div className ="row mt-5">
                            <div className= "col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className ="card">
                                    <img src= {a1} className ="card-img img-fluid"/>
                                    <div className ="card-body">
                                        <h2>Threads</h2>
                                        <p>Illustration</p>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className ="card">
                                    <img src= {a2} className ="card-img img-fluid"/>
                                    <div className ="card-body">
                                        <h2>Threads</h2>
                                        <p>Illustration</p>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className ="card">
                                    <img src= {a3} className ="card-img img-fluid"/>
                                    <div className ="card-body">
                                        <h2>Threads</h2>
                                        <p>Illustration</p>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="row mt-5">
                        <div className= "col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className ="card">
                                    <img src= {a4} className ="card-img img-fluid"/>
                                    <div className ="card-body">
                                        <h2>Threads</h2>
                                        <p>Illustration</p>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className ="card">
                                    <img src= {a5} className ="card-img img-fluid"/>
                                    <div className ="card-body">
                                        <h2>Threads</h2>
                                        <p>Illustration</p>
                                    </div>
                                </div>
                            </div>
                            <div className= "col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className ="card">
                                    <img src= {a6} className ="card-img img-fluid imgset "/>
                                    <div className ="card-body">
                                        <h2>Threads</h2>
                                        <p>Illustration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="container text-center pt-5">
                        <h1 style={{fontSize: "50", fontWeight: "bold"}}>OUR AMAZING TEAM</h1>
                        <p>lorem ipsum dollar sit amet consecsetdor</p>
                        <div className ="row pt-5">
                            <div className ="col-lg-4 col-md-4 col-sl-4 col-12">
                                <figure className= "figure">
                                    <img src={p1} className ="figure-img img-fluid rounded-circle" style ={{height: "250px", width:"250px"}}/>
                                    <figcaption>
                                        <h4>Kay Garland</h4>
                                        <p className= "figure-caption"> Lead Designer</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className ="col-lg-4 col-md-4 col-sl-4 col-12">
                                <figure className= "figure">
                                    <img src={p2} className ="figure-img img-fluid rounded-circle" style ={{height: "250px", width:"250px"}}/>
                                    <figcaption>
                                        <h4>Kay Garland</h4>
                                        <p className= "figure-caption"> Lead Designer</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className ="col-lg-4 col-md-4 col-sl-4 col-12">
                                <figure className= "figure">
                                    <img src={p3} className ="figure-img img-fluid rounded-circle" style ={{height: "250px", width:"250px"}}/>
                                    <figcaption>
                                        <h4>Kay Garland</h4>
                                        <p className= "figure-caption"> Lead Designer</p>
                                    </figcaption>
                                </figure>
                            </div>                            
                        </div>
                </section>
                <footer>
                    <h6 className ="text-center">Copyright @ 2020, Designed by abc</h6>
                </footer>
              </div>
            </>     
        )
    }
}
 
export default Responsiveweb