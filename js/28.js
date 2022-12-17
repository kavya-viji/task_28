button=document.createElement("button");
button.setAttribute("onclick","color()");
button.style.backgroundColor="lightblue";
button.style.textAlign="center";
button.style.border="groove ";
button.style.borderWidth="30px";
button.style.borderColor="salmon";
button.innerText="Start";

document.body.appendChild(button);
document.body.style.textAlign="center";
document.body.style.marginTop="20%";

function color()
{
	var randomColor = Math.trunc(Math.random()*1677);
	document.body.style.backgroundColor = '#' + randomColor;
}
//16711680red 16777215w

