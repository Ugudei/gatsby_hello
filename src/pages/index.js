import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return ( <div style={{ color: 'blue', fontSize: '72px'}}>
    <Link to="/contact">Contact</Link>
    <h1>Hello world!</h1> 
    <p>love baby</p>
    <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F11%2Fbaby-yoda-disney-plus-mandalorian-name-grogu-info-001.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
    </div>
  );
}
