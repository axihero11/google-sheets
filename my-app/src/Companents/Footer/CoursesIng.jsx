import React from 'react'
// imports Image
import word from "./imgs/word.png"
import exel from "./imgs/exel.png"
import point from "./imgs/point.png"
import html from "./imgs/html.png"
import css from "./imgs/css.png"
import js from "./imgs/js.png"
import ai from "./imgs/ai.png"
import cr from "./imgs/Cr.png"
import ps from "./imgs/ps.png"
import py from "./imgs/py.png"
import node from "./imgs/node.png"
import java from "./imgs/java.png"



function CoursesIng({course}) {
  return (
        <div className="radio-imgs-container">
                  
                  <div className="imgs-item">
                    <div id={course=="English" ? 'selected1' : ''} className="img-box">
                      <img src={ps} alt="Word" />
                    </div>
                    <div id={course=="English" ? 'selected1' : ''} className="img-box">
                      <img src={ai} alt="Word" />
                    </div>
                    <div id={course=="English" ? 'selected1' : ''} className="img-box">
                      <img src={cr} alt="Word" />
                    </div>
                  </div>
                  <div className="imgs-item">
                    <div id={course=="Komp_Sav" ? 'selected1' : ''} className="img-box">
                      <img src={word} alt="Word" />
                    </div>
                    <div id={course=="Komp_Sav" ? 'selected1' : ''} className="img-box">
                      <img src={exel} alt="Word" />
                    </div>
                    <div id={course=="Komp_Sav" ? 'selected1' : ''} className="img-box">
                      <img src={point} alt="Word" />
                    </div>
                  </div>
                  <div className="imgs-item">
                    <div id={course=="Frontend" ? 'selected1' : ''} className="img-box">
                      <img src={html} alt="Word" />
                    </div>
                    <div id={course=="Frontend" ? 'selected1' : ''} className="img-box">
                      <img src={css} alt="Word" />
                    </div>
                    <div id={course=="Frontend" ? 'selected1' : ''} className="img-box">
                      <img src={js} alt="Word" />
                    </div>
                    <div id={course=="Frontend" ? 'selected1' : ''} className="img-box">
                      <img src={html} alt="Word" />
                    </div>
                  </div>
                  <div className="imgs-item">
                    <div id={course=="Backend" ? 'selected1' : ''} className="img-box">
                      <img src={py} alt="Word" />
                    </div>
                    <div id={course=="Backend" ? 'selected1' : ''} className="img-box">
                      <img src={node} alt="Word" />
                    </div>
                    <div id={course=="Backend" ? 'selected1' : ''} className="img-box">
                      <img src={java} alt="Word" />
                    </div>
                  </div>
                  <div className="imgs-item">
                    <div id={course=="Grafic Desing" ? 'selected1' : ''} className="img-box">
                      <img src={ps} alt="Word" />
                    </div>
                    <div id={course=="Grafic Desing" ? 'selected1' : ''} className="img-box">
                      <img src={ai} alt="Word" />
                    </div>
                    <div id={course=="Grafic Desing" ? 'selected1' : ''} className="img-box">
                      <img src={cr} alt="Word" />
                    </div>
                  </div>
                  <div className="imgs-item">
                    <div id={course=="Math" ? 'selected1' : ''} className="img-box">
                      <img src={word} alt="Word" />
                    </div>
                    <div id={course=="Math" ? 'selected1' : ''} className="img-box">
                      <img src={word} alt="Word" />
                    </div>
                    <div id={course=="Math" ? 'selected1' : ''} className="img-box">
                      <img  src={word} alt="Word" />
                    </div>
                  </div>
                </div>
  )
}

export default CoursesIng
