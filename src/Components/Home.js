import React from 'react'
import { Container,Nav } from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import Breakfast from '../Comp/Breakfast'
import Break from '../Comp/dash';
import Lunch from '../Comp/Nonveg';
//import Nonveg from './Nonveg';
import Snacks from '../Comp/Snacks';
//import Search from './search';
//import json from '../Server/details.json';

export default function Navs() {
    return (
        <>
            <Container className="App">
     <Nav className="justify-content-center"style={{backgroundColor:"lightblue"}}>
    <Nav.Item>
      <Nav.Link href="/dash">All</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/breakfast" >Breakfast</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/nonveg">Lunch</Nav.Link>
    </Nav.Item>
   
    <Nav.Item>
      <Nav.Link href="/snacks">
      Snacks
      </Nav.Link>
    </Nav.Item>
  </Nav>
 
  
    </Container>
  
        </>
    )
}
