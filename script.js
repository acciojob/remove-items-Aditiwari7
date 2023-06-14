//your JS code here. If required.
const ele = document.getElementById("colorSelect");
const btn = document.querySelector("form input");

btn.addEventListener('click', ()=>{
	let value = ele.value;
	update(value);
})

function update(val){
	if(!val){
		return ;
	}
	for (let i = 0; i < ele.children.length; i++) {
		if(val === ele.children[i].value){
			ele.children[i].remove();
			return;
		}
	}
}

// btn.addEventListener('click', ()=>{
// 	let value = ele.value;
// 	update(value);
// })