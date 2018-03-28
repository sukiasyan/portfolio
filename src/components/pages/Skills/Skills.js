import React from 'react';
import './Skills.css';
import htmlLogo from '../../../assets/images/skills/html5.png';
import jsxLogo from '../../../assets/images/skills/react.png';
import cssLogo from '../../../assets/images/skills/css3.png';
import bootstrapLogo from '../../../assets/images/skills/bootstrap.png';
import sassLogo from '../../../assets/images/skills/sass.png';
import bowerLogo from '../../../assets/images/skills/bower.png';
import gulpLogo from '../../../assets/images/skills/gulp.png';
import gruntLogo from '../../../assets/images/skills/grunt.png';
import gitLogo from '../../../assets/images/skills/github.png';
import javascriptLogo from '../../../assets/images/skills/javascript.png';
import jqueryLogo from '../../../assets/images/skills/jquery.png';
import materialLogo from '../../../assets/images/skills/materialize.png';
import mongoLogo from '../../../assets/images/skills/mongodb.png';
import photoLogo from '../../../assets/images/skills/photoshop.png';
import webpackLogo from '../../../assets/images/skills/webpack.png';
import nodeLogo from '../../../assets/images/skills/nodejs.png';
import herokuLogo from '../../../assets/images/skills/heroku.png';

const skiils = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m12 skills-title-main">Skills</div>
            </div>
            <div className="row">

                <div className="col s12 m12">
                    <div className="card-panel ">
                        <p>HTML</p>
                        <hr/>
                    <div className="row">
                        <div className="col s12 m3 content-center">
                            <img className="imgSize" src={htmlLogo}/><br/>
                            <h6 className="skills-title">HTML5</h6>
                        </div>
                        <div className="col s12 m3 content-center">
                            <img className="imgSize" src={jsxLogo}/><br/>
                            <h6 className="skills-title">JSX</h6>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col s12 m12">
                    <div className="card-panel ">
                        <p>CSS</p>
                        <hr/>
                        <div className="row">
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={cssLogo}/><br/>
                                <h6 className="skills-title">CSS3</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={bootstrapLogo}/><br/>
                                <h6 className="skills-title">Bootstrap</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={sassLogo}/><br/>
                                <h6 className="skills-title">SASS</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={materialLogo}/><br/>
                                <h6 className="skills-title">Materialize</h6>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col s12 m12">
                    <div className="card-panel ">
                        <p>JavaScript</p>
                        <hr/>
                        <div className="row">
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={javascriptLogo}/><br/>
                                <h6 className="skills-title">JavaScript</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={jqueryLogo}/><br/>
                                <h6 className="skills-title">JQuery</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={nodeLogo}/><br/>
                                <h6 className="skills-title">Node JS</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={jsxLogo}/><br/>
                                <h6 className="skills-title">React JS</h6>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col s12 m12">
                    <div className="card-panel ">
                        <p>Build Tools</p>
                        <hr/>
                        <div className="row">
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={webpackLogo}/><br/>
                                <h6 className="skills-title">Webpack</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={bowerLogo}/><br/>
                                <h6 className="skills-title">Bower</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={gulpLogo}/><br/>
                                <h6 className="skills-title">Gulp</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={gruntLogo}/><br/>
                                <h6 className="skills-title">Grunt</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m12">
                    <div className="card-panel ">
                        <p>Other</p>
                        <hr/>
                        <div className="row">
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={mongoLogo}/><br/>
                                <h6 className="skills-title">MongoDB</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={herokuLogo}/><br/>
                                <h6 className="skills-title">Heroku</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={gitLogo}/><br/>
                                <h6 className="skills-title">Git</h6>
                            </div>
                            <div className="col s12 m3 content-center">
                                <img className="imgSize" src={photoLogo}/><br/>
                                <h6 className="skills-title">Photoshop</h6>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};
export default skiils;