document.getElementById('menu-icon').addEventListener('click',function(){
	console.log('menu icon clicked!');
	var menu=document.getElementById('nav-menu');
	if(menu.style.display==='block'){
		menu.style.display='none';
		console.log('menu hidden!');
}else{
menu.style.display='block';
console.log('menu shown!');
}
});
const saveBtn=document.getElementById("save-btn");
saveBtn.addEventListener("click",function(){
	const content=Document.getElementById("note-area").value;
	const blob=new Blob([content],{type: "text/plain"});
	const link=document.createObjectURl(blob);
	link.download="document.txt";
	link.click();
});