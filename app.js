const canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
const clrs=document.querySelectorAll('.clr');
console.log(clrs);
//document->html deer bga buh kod
// window->ajluulsan huudas
canvas.width=window.innerWidth 
canvas.height=window.innerHeight;
//zuraasiin urgun
ctx.lineWidth=5;
let prevX=null;
let prevY=null;
let draw=false;
//addEventListener->mousemove
let clrArr=Array.from(clrs);
console.log(clrArr);
//forEach->array/massive
clrArr.forEach(clr=>{
	clr.addEventListener('click',()=>{
		ctx.strokeStyle=clr.dataset.clr;//zuraasiin ongo oorchloh
	});
});
//mousedown->mouse deer darah uyd
window.addEventListener('mouseup',()=>{draw=false;});
window.addEventListener('mousedown',()=>{ draw=true;});
window.addEventListener('mousemove',(e)=>{
	if(draw==false || prevX==null || prevY==null){
		prevX=e.clientX;
		prevY=e.clientY;
	}
	console.log(e.clientX);
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	ctx.beginPath(); //zuraasiin zamiig ehluuleh
	ctx.moveTo(prevX,prevY); //mouse hudluh bairshil
	ctx.lineTo(mouseX,mouseY); //mousenii bairshild zurah
	ctx.stroke(); //zursan zuraasiig gargaj ireh
	prevX=e.clientX;
	prevY=e.clientY;
});
let clearBtn= document.querySelector('.clear');
clearBtn.addEventListener('click',()=>{
	ctx.clearRect(0,0,canvas.width,canvas.height)
});
let saveBtn= document.querySelector('.save');
saveBtn.addEventListener('click',()=>{
	let data=canvas.toDataURL('imag/jpg');
	let a=document.createElement('a');
	a.href=data;
	a.download="test.jpg";
	a.click();
});
let selectBtn= document.querySelector('.select');
let selector= document.querySelector('.selector');
selectBtn.addEventListener('click',()=>{
	
});