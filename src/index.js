import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppText} from './components/text';
import {PapersEntry} from './components/papers';
import {ConferentsEntry} from './components/conferences'


let paperRef = React.createRef();
let conferenceRef = React.createRef();
let mainRef = React.createRef();

function Paper(props){
    return  <div class='paper' ref={paperRef}>
        <div class='title'> {props.title} </div>
        <div class='authors'> {props.autors.toLowerCase()} </div>
        <div class='journal'> {props.journal} </div>
        <a class='doi' href={props.doi}> {props.doi} </a>
    </div>;
}

function Conference(props){
    return  <div class='paper' ref={conferenceRef} >
        <div class='title'> {props.title} </div>
        <div class='authors'> {props.autors.toLowerCase()} </div>
        <div class='journal'> {props.event} </div>
        <div class='place'> {props.place} </div>
        
    </div>;
}

function Papers(){
    let entries=[]
    let papersEntry = PapersEntry.sort((a, b) => a.year > b.year ? -1 : a.year < b.year ? 1 : 0)
    papersEntry.map(entry => (
        entries.push(
                <Paper  journal={entry.journal}
                        title={entry.title}
                        autors={entry.autors}
                        doi={entry.doi}
                />
        )
    ));

    return  <div class='papers'>
                <div class='subHeader'> Papers </div>
                {entries}
            </div>;
}

function Conferences(){
    let entries=[]
    let conferentsEntry = ConferentsEntry.sort((a, b) => a.year > b.year ? -1 : a.year < b.year ? 1 : 0)

    conferentsEntry.map(entry => (
        entries.push(
                <Conference  event={entry.event}
                        title={entry.title}
                        autors={entry.autors}
                        place={entry.place}
                />
        )
    ));
    return  <div class='papers'>
        <div class='subHeader'> Conferences </div>
        {entries}
    </div>;
}

function conferenceScroll(){
    window.scrollTo(0, paperRef.current.offsetTop);
}
function paperScroll(){
    window.scrollTo(0, mainRef.current.offsetTop);
}

function mainScroll(){
    window.scrollTo(0, mainRef.current.offsetTop);
}

function Menu(){
    return  <div class='menu'>
                {/* <div class='menuItem' id='' 
                onClick={mainScroll}>Main</div> */}
                <div onClick={paperScroll} class='menuItem'>Papers</div>
                <div onClick={conferenceScroll} class='menuItem'>Conferences</div>
                
            </div>;
}

function Title() {
    //return <h1 class='header'>Pablo Navarro, {props.name}</h1>;
    return  <div class='header'>
                <div>Pablo Navarro</div>
            </div>;
}

function Description(){
    return  <div class='description' ref={mainRef}>
                <div>{AppText.description}</div>
            </div>
}
  
const element = <div>   
                        <Menu/> 
                        <Title/> 
                        <Description/>
                        <Papers/>
                        <Conferences/> 
                </div>;

ReactDOM.render(
    element,
    document.getElementById('root')
);