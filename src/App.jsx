import React,{Suspense,lazy,useEffect} from 'react';
import {Link,Route,Routes,useLocation} from 'react-router-dom';

const Landing=lazy(()=>import('./pages/Landing.jsx'));
const Register=lazy(()=>import('./pages/Register.jsx'));
const Success=lazy(()=>import('./pages/Success.jsx'));
export default function App(){const loc=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'smooth'});},[loc.pathname]);return <Suspense fallback={<div className="loading">Getting the stage ready…</div>}><Routes><Route path="/" element={<Landing/>}/><Route path="/register" element={<Register/>}/><Route path="/success" element={<Success/>}/><Route path="*" element={<main className="notfound"><span className="eyebrow">WHOOPS!</span><h1>This page took a wrong turn.</h1><Link className="button" to="/">Back to the fun</Link></main>} /></Routes></Suspense>}
