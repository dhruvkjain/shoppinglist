//var butn = document.getElementsByClassName("btn")[0];
// butn.addEventListener("click", function(){console.log("CLICKED")});

// addEventListener reacts to event mentioned like above to click and respond by executing what is written after comma

var userinput = document.getElementsByClassName("newitem")[0];
var button = document.getElementsByClassName("ent")[0];
var unorderedlist = document.querySelector("ul");

button.addEventListener("click" , function(){
	if(userinput.value.length > 0)
	{
		var list = document.createElement("li")
	    // createElement creates an element like here li of a list
	    list.appendChild(document.createTextNode(userinput.value)); 
	    // appendChild adds the element to it's place like here it's li
	    // every element has a node, createTextNode creates a node for text which is here input from user
	    unorderedlist.appendChild(list);
	    // syntax: parent.appendChild(child);
	    var delbutton = document.createElement("button");
	    delbutton.innerHTML="Delete" ;
	    list.appendChild(delbutton);
	    delbutton.addEventListener("click" , function(){
	    	list.remove();
	    })
	    userinput.value = "" ;
	    // to make input string empty for next input
	}
});

userinput.addEventListener("keypress" , function(){
	if(userinput.value.length > 0 && event.keyCode === 13)
		// 13 is keycode for enter key, event.keycode check if key of pressed key is 13
	{
		var list = document.createElement("li")
	    // createElement creates an element like here li of a list
	    list.appendChild(document.createTextNode(userinput.value)); 
	    // appendChild adds the element to it's place like here it's li
	    // every element has a node, createTextNode creates a node for text which is here input from user
	    unorderedlist.appendChild(list);
	    var delbutton = document.createElement("button");
	    delbutton.innerHTML="Delete"
	    list.appendChild(delbutton);
	    delbutton.addEventListener("click" , function(){
	    	list.remove();
	    })
	    userinput.value = "" ;
	    // to make input string empty for next input
	}
});

// below is to remove the example in list
var del = document.getElementsByClassName("delete")[0];
var list2 = document.getElementById("slist");
del.addEventListener("click",function(){
	if(list2.hasChildNodes())
	{
		list2.removeChild(list2.children[0]);
	}
} );


var duedate=document.getElementsByClassName("duedate")[0];
var buttondate = document.getElementsByClassName("entdate")[0];
buttondate.addEventListener("click",function()
{
	if(duedate.value.length>0)
	{
		document.querySelector("h4").innerHTML=duedate.value;
		duedate.value="";
	}
});

duedate.addEventListener("keypress",function()
{
	if(duedate.value.length>0 && event.keyCode === 13)
	{
		document.querySelector("h4").innerHTML=duedate.value;
		duedate.value="";
	}
});