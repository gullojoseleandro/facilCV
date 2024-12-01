import{j as e}from"./createLucideIcon.B8zdPue_.js";import{r as i}from"./index.l2PZgWEW.js";import{D as u,a as h,b as y,c as j,d as g,e as f,L as a,G as w}from"./label.CEyXsqBA.js";import{I as s,B as C}from"./input.Dzvr0aVR.js";import{u as N,L as b}from"./loader-circle.DoYWmRXJ.js";import{m as t}from"./proxy.DnQlockK.js";import"./index.DY16rmGi.js";const D=({children:r})=>{const[c,o]=i.useState(!1),[n,l]=i.useState(!1),{toast:m}=N(),d=async p=>{p.preventDefault(),l(!0),await new Promise(x=>setTimeout(x,2e3)),l(!1),o(!1),m({title:"Registro exitoso",description:"Bienvenido a FacilCV. Ya puedes iniciar sesión."})};return e.jsxs(u,{open:c,onOpenChange:o,children:[e.jsx(h,{asChild:!0,children:r}),e.jsxs(y,{className:"sm:max-w-[425px]",children:[e.jsxs(j,{children:[e.jsx(g,{children:"Crear una cuenta"}),e.jsx(f,{children:"Completa el formulario para registrarte en FacilCV."})]}),e.jsxs("form",{onSubmit:d,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"name",children:"Nombre completo"}),e.jsx(s,{id:"name",placeholder:"Juan Pérez",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"email",children:"Correo electrónico"}),e.jsx(s,{id:"email",type:"email",placeholder:"tu@ejemplo.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"password",children:"Contraseña"}),e.jsx(s,{id:"password",type:"password",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"confirmPassword",children:"Confirmar contraseña"}),e.jsx(s,{id:"confirmPassword",type:"password",required:!0})]}),e.jsx(C,{type:"submit",className:"w-full",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"mr-2 h-4 w-4 animate-spin"}),"Registrando..."]}):"Registrarse"})]})]})]})},v=i.memo(D),P=()=>{const r=i.useMemo(()=>e.jsx(w,{className:"bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1",size:"lg",children:"Regístrate gratis"}),[]);return e.jsx("section",{className:"py-10 px-4 sm:px-6 lg:px-8  text-white",children:e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto text-center",children:[e.jsx(t.h1,{className:"text-5xl sm:text-6xl font-extrabold mb-6 leading-tight",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},children:"Tu CV profesional en línea"}),e.jsx(t.p,{className:"text-xl sm:text-2xl mb-10 text-teal-100",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:"Crea, comparte y gestiona tu CV de forma fácil y profesional"}),e.jsx(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},children:e.jsx(v,{children:r})})]})})};export{P as default};
