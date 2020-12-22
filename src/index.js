import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppText} from './components/text';
import {PapersEntry} from './components/papers';
import {ConferentsEntry} from './components/conferences'

function Paper(props){
    return  <div class='paper'>
        <div class='title'> {props.title} </div>
        <div class='authors'> {props.autors.toLowerCase()} </div>
        <div class='journal'> {props.journal} </div>
        <a class='doi' href={props.doi}> {props.doi} </a>
    </div>;
}

function Conference(props){
    return  <div class='paper'>
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


function Menu(){
    return  <div class='menu'>
                <div class='menuItem'>Main</div>
                <div class='menuItem'>Papers</div>
                <div class='menuItem'>Conferences</div>
                
            </div>;
}

function Title() {
    //return <h1 class='header'>Pablo Navarro, {props.name}</h1>;
    return  <div class='header'>
                <div>Pablo Navarro</div>
            </div>;
}

function Description(){
    return  <div class='description'>
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