let cont = document.querySelector(".form");
let truediv = document.querySelector(".true");
let wrongdiv = document.querySelector(".false");
let btn = document.querySelector(".calc");

let inpts = ["in-div"];


//المدخلات
//input per month الدخل الشهري
let inperm = document.querySelector(".in-div input");
//out to pay الدين
let outtop = document.querySelector(".out-div input");
//percent % النسبة بين الدين والدخل
let percent = document.querySelector(".percent-div input");
//time to pay مدة التسليم
let time = document.querySelector(".time-div input");




//المعادلات
function addandremove (tocontainer, divfloor , eo) {

    if (eo.target.classList.contains("icon") || eo.target.classList.contains("cr") || eo.target.classList.contains("wr")) {
    //المتغيرات
    let tar = eo.target.parentNode.classList;
				let divscont = document.createElement("div");
				let h = document.createElement("h1");
				let h1txt = "";
				let imgsrc = "";
				let imgcw = document.createElement("img");
				let imgdiv = document.createElement("div");
				let cwdiv = document.createElement("div");
				imgdiv.classList.add("lico");
				cwdiv.classList.add("icon");
				let img = document.createElement("img");
				let inpttxt = document.createElement("input");
				let classes = "";
				
				if (eo.target.classList.contains("icon"))
			    	{
			    classes = eo.target.parentNode.className.split(" ")[0];
			    	}
			    	else if (eo.target.classList.contains("cr") || eo.target.classList.contains("wr")) {
			    	
			 classes = eo.target.parentNode.parentNode.className.split(" ")[0];
			 
			    	}
				
				if (classes != "time-div") {inpttxt.setAttribute("type", "number");}
				
				//عمل العنصر الأب
				divscont.classList.add(classes);
				divscont.classList.add("cont");
				
				
				
				
				switch (classes) {
								case "percent-div":
								  h1txt = "النسبة بين الدين والدخل";
								  break;
								  
								case "in-div":
								  h1txt = "الدخل";
								  imgsrc = "مال.png";
								  break;
								  
								case "out-div":
						  		h1txt = "الدين";
						  		imgsrc = "مال.png";
								  break;
								  
								case "time-div":
								  h1txt = "مدة التسليم";
								  imgsrc = "وقت.png";
								  break;
				}
				
				h.innerText = h1txt;
				
				
				//الإضافة والإلغاء
    if (tocontainer == "false") {
    
        divscont.setAttribute("floor-false", divfloor);
        divscont.removeAttribute("floor-true");
        
        wrongdiv.append(divscont);
								divscont.append(h);
					  	divscont.append(cwdiv);
					  	divscont.append(inpttxt);
					  	cwdiv.append(imgcw);
								
								
					 		if (classes != "percent-div") {
					 						divscont.append(imgdiv);
								    img.src = imgsrc;
							    	imgdiv.append(img);
								} else {
												let percentp = document.createElement("p");
												let pdiv = document.createElement("div");
												percentp.innerText = "%";
												pdiv.classList.add("lico");
												
												divscont.append(pdiv);
												pdiv.append(percentp);
								}
								
								imgcw.classList.add("wr");

				    if (eo.target.classList.contains("icon"))
			    	{eo.target.parentNode.remove();} else if (eo.target.classList.contains("cr"))
	{eo.target.parentNode.parentNode.remove();}
				}
				
				
				
				
				
				
				else if (tocontainer == "true") {
        
        divscont.setAttribute("floor-true", divfloor);
        divscont.removeAttribute("floor-false");

        truediv.append(divscont);
								divscont.append(h);
					  	divscont.append(cwdiv);
					  	divscont.append(inpttxt);
					  	cwdiv.append(imgcw);
								
								
					 		if (classes != "percent-div") {
					 						divscont.append(imgdiv);
								    img.src = imgsrc;
							    	imgdiv.append(img);
								} else {
												let percentp = document.createElement("p");
												let pdiv = document.createElement("div");
												percentp.innerText = "%";
												pdiv.classList.add("lico");
												
												divscont.append(pdiv);
												pdiv.append(percentp);
								}
								
								imgcw.classList.add("cr");
								
				    if (eo.target.classList.contains("icon"))
			    	{eo.target.parentNode.remove();} else if (eo.target.classList.contains("wr"))
	{eo.target.parentNode.parentNode.remove();}
				
				
				}
				
				
}


}





function floors () {
			let wrnums = wrongdiv.querySelectorAll(".cont").length;
			let wr = wrongdiv.querySelectorAll(".cont");
   let cr = truediv.querySelectorAll(".cont");
   let crnums = truediv.querySelectorAll(".cont").length;
   
			switch (wrnums) {
			    case 0:
			      cr[0].setAttribute("floor-true",1);
			      cr[1].setAttribute("floor-true",2);
				  			cr[2].setAttribute("floor-true",3);
				  			cr[3].setAttribute("floor-true",4);
				  			btn.setAttribute("button-floor",5);
			      break;
			      
			    case 1:
				  			wr[0].setAttribute("floor-false",3);
				  			cr[0].setAttribute("floor-true",1);
				  			cr[1].setAttribute("floor-true",2);
				  			cr[2].setAttribute("floor-true",3);
				  			btn.setAttribute("button-floor",4);
							  break;
							  
							case 2:
				  			wr[0].setAttribute("floor-false",2);
				  			wr[1].setAttribute("floor-false",3);
				  			cr[0].setAttribute("floor-true",1);
				  			cr[1].setAttribute("floor-true",2);
				  			btn.setAttribute("button-floor",3);
							  break;
       
       case 3:
				  			wr[0].setAttribute("floor-false",1);
				  			wr[1].setAttribute("floor-false",2);
				  			wr[2].setAttribute("floor-false",3);
				  			cr[0].setAttribute("floor-true",1);
				  			btn.setAttribute("button-floor",2);
							  break;
							  
							case 4:
				  			wr[0].setAttribute("floor-false",0);
				  			wr[1].setAttribute("floor-false",1);
				  			wr[2].setAttribute("floor-false",2);
				  			wr[3].setAttribute("floor-false",3);
				  			btn.setAttribute("button-floor",1);
				  			inpts = [];
							  break;
			}
			
			//قائمة الأشياء المفعلة
			inpts = [];
			
			if (crnums == 1) {
							inpts.push(cr[0].className.split(" ")[0]);
			} else if (crnums == 2) {
							inpts.push(cr[0].className.split(" ")[0]);
							inpts.push(cr[1].className.split(" ")[0]);
			} else if (crnums == 3) {
							inpts.push(cr[0].className.split(" ")[0]);
							inpts.push(cr[1].className.split(" ")[0]);
							inpts.push(cr[2].className.split(" ")[0]);
			} else if (crnums == 4) {
							inpts.push(cr[0].className.split(" ")[0]);
							inpts.push(cr[1].className.split(" ")[0]);
							inpts.push(cr[2].className.split(" ")[0]);
							inpts.push(cr[3].className.split(" ")[0]);
			}
			
}


function checkinpts () {
    let cr = truediv.querySelectorAll(".cont input");
    
    let check = true;
    
    cr.forEach( (item) => {
    				if (item.value == "") {
    								check = false;
    				} else {
    								check = true;
    				}
    });
														    
    
    return check;
}


function checkdisable () {
				if (inpts.length == 2) {
								btn.disabled = false;
				} else {
								btn.disabled = true;
				}
				
				if (inpts.includes("percent-div") && inpts.includes("time-div")) {
							 btn.disabled = true;
				}
}



function checkcalc () {
				if (inpts.length == 2) {
				
				if (checkinpts() == true) {
				
				//الحالة 1 - 1
								if (inpts.includes("in-div") && inpts.includes("out-div")) {
								
								
								    if (inperm.value == 0) {percent.value = ""; time.value = "";} else {
										
												percent.value = `${Math.round((outtop.value / inperm.value) * 100 * 100) / 100}`;
												time.value = `حوالي ${Math.round((outtop.value / inperm.value) * 100) / 100} شهر`;
												
												}
												
												
								}
								
								
								//الحالة 2 - 1
								else if (inpts.includes("in-div") && inpts.includes("percent-div")) {
								
								
												if (percent.value != 0 && inperm.value != 0) {
												
																outtop.value = `${Math.round(((percent.value / 100) * inperm.value) * 100) / 100}`;
																
																time.value = `حوالي ${Math.round((percent.value / 100) * 100) / 100} شهر`;
																
												}
								}
								
								//الحالة 3 - 1
								else if (inpts.includes("in-div") && inpts.includes("time-div")) {
												outtop.value = Math.round((time.value * inperm.value) * 100) / 100;
												
												percent.value = Math.round((time.value * 100) * 100) / 100;
								}
								
								
								
								
								
								
								
								//الحالة 4 - 2
								else if (inpts.includes("out-div") && inpts.includes("percent-div")) {
								
												inperm.value = Math.round(((100 * outtop.value) / percent.value) * 100) / 100;
												
												time.value = `حوالي ${Math.round((percent.value / 100) * 100) / 100} شهر`;
												
								}
								
								
								//الحالة 5 - 2
								else if (inpts.includes("out-div") && inpts.includes("time-div")) {
								    
								    if (time.value != 0 && outtop.value != 0) {
								    				inperm.value = Math.round(((outtop.value / time.value) * 100) / 100);
								    				
								    				percent.value = Math.round(((time.value * 100) * 100) / 100);
								    }
								}

								}
								
								
								
								
				}
}









truediv.onclick = (eo) => {
let c = eo.target.parentNode.parentNode.classList;


				if(eo.target.classList.contains("icon")) {
							
							switch(true) {
							    	case c.contains("percent-div"):

 eo.target.parentNode.parentNode.remove();
							    	  break;
								}
				}
				addandremove("false",3,eo);
}










wrongdiv.onclick = (eo) => {
let c = eo.target.parentNode.parentNode.classList;


				if(eo.target.classList.contains("icon")) {
							
							switch(true) {
							    	case c.contains("percent-div"):

 eo.target.parentNode.parentNode.remove();
							    	  break;
								}
				}
				addandremove("true",3,eo);
}





setInterval(() => {
    let ico = document.querySelectorAll(".true .cont .icon");
    
    let ico2 = document.querySelectorAll(".false .cont .icon");
    
    document.querySelectorAll(".false input").forEach( (item) => {
    				item.setAttribute("disabled", "");
    } )
    
    document.querySelectorAll(".true input").forEach( (item) => {
    				item.removeAttribute("disabled");
    } );
    
    ico.forEach( (item) => {
    				item.style.background = "#00CC00";
    				item.children[0].src = "صح.png";
    } );
    
    ico2.forEach( (item) => {
    				item.style.background = "#FF6666";
    				item.children[0].src = "خطأ.png";
    } );
    
    floors();
    checkdisable();
    
    inperm = document.querySelector(".in-div input");
    outtop = document.querySelector(".out-div input");
    percent = document.querySelector(".percent-div input");
				time = document.querySelector(".time-div input");
				
				
				
				
				if (document.querySelector(".time-div").parentNode.className.split(" ")[0] == "true") {
								document.querySelector(".true .time-div input").setAttribute("type","number");
								document.querySelector(".true .time-div h1").innerText = "مدة التسليم بالشهر";
								
				} else {
			    	document.querySelector(".false .time-div input").setAttribute("type","text");
				}
				
})







btn.onclick = (eo) => {
        cont = document.querySelector(".form");
    truediv = document.querySelector(".true");
    wrongdiv = document.querySelector(".false");
    btn = document.querySelector(".calc");

    checkcalc();
}