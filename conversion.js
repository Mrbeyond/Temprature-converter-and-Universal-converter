//BEGINNING OF SCRIPT CODE FOR CONVERSION
	//DECLARATION OF VARIABLES
	var one, two;
	//BEGINNING OF FUNCTION.
	function now(){
	one = boxa.value;
	two = boxb.value;
	result.value = "";
	maininput.focus();

	if (one=="Celsius" && two=="Celsius"){
		 		result.value =  parseFloat(maininput.value) +" " +"Degree(s)";
		 				 		}

	if (one=="Celsius" && two=="Kelvin"){
		 		result.value =  parseFloat(parseFloat(maininput.value) +(273)) +"K";}

	if (one=="Celsius" && two=="Fahrenheit"){
		 		result.value =  parseFloat(parseFloat(maininput.value) *(1.8) + 32) +"F";}	 

	if (one=="Kelvin" && two=="Celsius"){
		 		result.value =  parseFloat(parseFloat(maininput.value) -273) +" "+"Degree(s)";}

	if(one=="Kelvin" && two=="Kelvin"){
		 		result.value =  parseFloat(maininput.value)+"K";}

	if(one=="Kelvin" && two=="Fahrenheit"){
		 		result.value = parseFloat((parseFloat(maininput.value)-273)*(1.8)+32) + "F";}

	if(one=="Fahrenheit" && two=="Kelvin"){
		 		result.value = parseFloat(((parseFloat(maininput.value)-32)/1.8) +273) +"F";}

	if(one=="Fahrenheit" && two=="Celsius"){
		 		result.value =  parseFloat((parseFloat(maininput.value)-32)/1.8) +" "+"Degree(s)"}

	if(one=="Fahrenheit" && two=="Fahrenheit"){
		 		result.value =  parseFloat(maininput.value)+" "+"K";}
	
	if (maininput.value==""){
		 		alert("Please enter a valid number value to be converted");
		 		result.value="";}	
								}
	function clrs(){
		result.value="";}


			//SCRIPT FOR CALLING CONVERSION OPTRIONS
						var option;				
				// DISTANCE FUNCTION
				function showdistanceoptions(){
					option = head.value;
					if (option=="DISTANCE"){ 
								document.getElementById("temp").style.display="none";
								document.getElementById("money").style.display="none";
								document.getElementById("mass").style.display="none";
								document.getElementById("dist").style.display="block";
						}
					if (option=="TEMPERATURE"){
								document.getElementById("dist").style.display="none";
								document.getElementById("mass").style.display="none";
								document.getElementById("money").style.display="none";
								document.getElementById("temp").style.display="block";
						}
					if (option=="CURRENCY"){
								document.getElementById("dist").style.display="none";
								document.getElementById("mass").style.display="none";
								document.getElementById("temp").style.display="none";
								document.getElementById("money").style.display="block";
						}
					if (option=="WEIGHT"){
								document.getElementById("dist").style.display="none";
								document.getElementById("money").style.display="none";
								document.getElementById("temp").style.display="none";
								document.getElementById("mass").style.display="block";
						}
					if (option=="SELECT"){
						        document.getElementById("dist").style.display="none";
								document.getElementById("money").style.display="none";
								document.getElementById("temp").style.display="none";
								document.getElementById("mass").style.display="none";
						alert("Please select an option to be converted in the select box");}	
				}


// BEGINNING OF SCRIPT CODE FOR CONVERSION OF DISTANCE
	function distnow(){
	var one, two;
	one = dista.value;
	two = distb.value;
	dresult.value = "";
	dinput.focus();

//Beginning of Kilometer
	if (one=="Kilometer" && two=="Kilometer"){
		 		dresult.value = parseFloat(dinput.value) +"km";}

	if (one=="Kilometer" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *(39370.078740157)) +"in";}

	if (one=="Kilometer" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *(0.6213711922) ) +"mi";}	 

	if (one=="Kilometer" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *(3280.8398950131))+"ft";}

	if(one=="Kilometer" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *1000)+"m";}

	if(one=="Kilometer" && two=="Centimeter"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)*(100000)) + "cm";}

	if(one=="Kilometer" && two=="Millimeter"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)* (1000000)) +"mm";}

	if(one=="Kilometer" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(1093.6132983377))+"yd";} 

//Beginning of inch		 		 		
	if(one=="Inch" && two=="Inch"){
		 		dresult.value =  parseFloat(dinput.value)+"in";}

	if(one=="Inch" && two=="Kilometer"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0000245)) +"km";}	

	if(one=="Inch" && two=="Yard"){
		 		dresult.value =  parseFloat( parseFloat(dinput.value)*(0.027777777777778))+"yd";}

	if(one=="Inch" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.08333333333333))+"ft";}

	if(one=="Inch" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0245))+"m";} 

	if(one=="Inch" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(2.54))+"cm";}

	if(one=="Inch" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(25.4))+"ft";}

	if(one=="Inch" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00001578282828282828))+"mi";}
//Beginning of mile		 		
	if(one=="Mile" && two=="Mile"){
		 		dresult.value =  parseFloat(dinput.value) +"mi";} 

	if(one=="Mile" && two=="Kilometer"){
				dresult.value = parseFloat(parseFloat(dinput.value)*(1.609344)) +"km";} 

	if(one=="Mile" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(1609.344))+"m";} 

 	if(one=="Mile" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(5280))+"ft";}

	if(one=="Mile" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(1760))+"km";} 

	if(one=="Mile" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(160934.4))+"cm";}

	if(one=="Mile" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(1609344))+"mm";}	

	if(one=="Mile" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(63360))+"in";} 	
//Beginning of yard		 		
	if(one=="Yard" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00058681818181818182))+"mi";}

	if(one=="Yard" && two=="Kilometer"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)*(0.0009144))+"km";}

	if(one=="Yard" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.9144))+"m";
		 	}

 	if(one=="Yard" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(3))+"ft";}

	if(one=="Yard" && two=="Yard"){
		 		dresult.value =  parseFloat(dinput.value) +"yd";}

	if(one=="Yard" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(91.44))+"cm";}

	if(one=="Yard" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(914.4))+"mm";}	

	if(one=="Yard" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(36))+"in";}
//Beginning of Feet		 		
	if(one=="Feet" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.000189393939393939394))+"mi";}

	if(one=="Feet" && two=="Kilometer"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)*(0.0003048))+"km";}

	if(one=="Feet" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.3048))+"m";}

 	if(one=="Feet" && two=="Feet"){
		 		dresult.value =  parseFloat(dinput.value) +"ft";}

	if(one=="Feet" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.3333333333333333))+"yd";}

	if(one=="Feet" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(30.48))+"cm";}

	if(one=="Feet" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(304.8))+"mm";}	

	if(one=="Feet" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(12))+"in";} 	

//Beginning of Meter		 		
	if(one=="Meter" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00062137119223733))+"mi";}

	if(one=="Meter" && two=="Kilometer"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)*(0.001))+ "km";}

	if(one=="Meter" && two=="Meter"){
		 		dresult.value =  parseFloat(dinput.value) +"m";}

 	if(one=="Meter" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(3.2808398950131))+"ft";}

	if(one=="Meter" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(1.0936132983377))+"yd";}

	if(one=="Meter" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(100))+"cm";}

	if(one=="Meter" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(1000))+"mm";}	

	if(one=="Meter" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(39.370078740157))+"in";} 	

//Beginning of Centimeter		 		
	if(one=="Centimeter" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0000062137119223733))+"mi";}

	if(one=="Centimeter" && two=="Kilometer"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00001))+"km";} 

	if(one=="Centimeter" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.01))+"m";}

 	if(one=="Centimeter" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.032808398950131))+"ft";}

	if(one=="Centimeter" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.010936132983377))+"yd";}

	if(one=="Centimeter" && two=="Centimeter"){
		 		dresult.value =  parseFloat(dinput.value) +"cm";}

	if(one=="Centimeter" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(10))+"mm";}	

	if(one=="Centimeter" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.39370078740157))+"in";} 
//Beginning of Millimeter		 		
	if(one=="Millimeter" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00000062137119223733))+"mi";}

	if(one=="Millimeter" && two=="Kilometer"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.000001))+"km";}

	if(one=="Millimeter" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.001))+"m";}

 	if(one=="Millimeter" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0032808398950131))+"ft";}

	if(one=="Millimeter" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0010936132983377))+"yd";}

	if(one=="Millimeter" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.1))+"cm";}	

	if(one=="Millimeter" && two=="Millimeter"){
		 		dresult.value =  parseFloat(dinput.value) +"mm";}

	if(one=="Millimeter" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.039370078740157))+"in";}

if (dinput.value==""){
		 		alert("Please enter a valid number value to be converted");
		 		dresult.value=""}
	} 

	//BEGINNING OF FUNCTION.
	function tempnow(){
	var one, two;
	one = tempa.value;
	two = tempb.value;
	tresult.value = "";
	tinput.focus();

	if (one=="Celsius" && two=="Celsius"){
		 		tresult.value =  parseFloat(tinput.value) +" " +"Degree(s)";}

	if (one=="Celsius" && two=="Kelvin"){
		 		tresult.value =  parseFloat(parseFloat(tinput.value) +(273)) +"K";}

	if (one=="Celsius" && two=="Fahrenheit"){
		 		tresult.value =  parseFloat(parseFloat(tinput.value) *(1.8) + 32) +"F";}	 

	if (one=="Kelvin" && two=="Celsius"){
		 		tresult.value =  parseFloat(parseFloat(tinput.value) -273) +" "+"Degree(s)";}

	if(one=="Kelvin" && two=="Kelvin"){
		 		tresult.value =  parseFloat(tinput.value)+"K";}

	if(one=="Kelvin" && two=="Fahrenheit"){
		 		tresult.value = parseFloat((parseFloat(tinput.value)-273)*(1.8)+32) + "F";}

	if(one=="Fahrenheit" && two=="Kelvin"){
		 		tresult.value = parseFloat(((parseFloat(tinput.value)-32)/1.8) +273) +"F";}

	if(one=="Fahrenheit" && two=="Celsius"){
		 		tresult.value =  parseFloat((parseFloat(tinput.value)-32)/1.8) +" "+"Degree(s)"}

	if(one=="Fahrenheit" && two=="Fahrenheit"){
		 		tresult.value =  parseFloat(tinput.value)+" "+"K";}
	
	if (tinput.value==""){
		 		alert("Please enter a valid number value to be converted");
		 		tresult.value="";}	
								}


	//BEGINNING OF SCRIPT CODE FOR CONVERSION OF CURRENCY
	var fascan=false;
	var lascan=false;
	function mnynow(){
	var lr, fr, la, fa;
	lr=lrate.value;
	fr=frate.value;
	la=lamount.value;
	fa=famount.value;

	if (fascan){if (la!="" && fa!=""){ famount.value==""; famount.value =parseFloat((parseFloat(la)*parseFloat(fr)/parseFloat(lr))); lamount.focus();} }
	if (lascan){if (la!="" && fa!=""){ lamount.value==""; lamount.value=parseFloat((parseFloat(lr)*parseFloat(fa)/parseFloat(fr))); famount.focus();};}

	 if (lr!="" && fr!="") { if (la!="" && fa==""){famount.value =parseFloat((parseFloat(la)*parseFloat(fr)/parseFloat(lr)));
												fascan=true; lamount.focus();} 

							if (la=="" && fa!="") {lamount.value=parseFloat((parseFloat(lr)*parseFloat(fa)/parseFloat(fr)));
												lascan=true;	famount.focus();}

							if (la=="" && fa==""){alert("Please input the Amount to be converted")}
						   } 
	
	

	if (lr=="" || fr=="") {alert("Both rates are  required"); la==""; fa==""; lrate.focus();}
																}
	 
		//DECLARATION OF VARIABLES
	var one, two;
	//BEGINNING OF FUNCTION.
	function massnow(){
	one = massa.value;
	two = massb.value;
	result.value = "";
	minput.focus();
//tone
	if (one=="Tone" && two=="Tone"){
		 		mresult.value =  parseFloat(minput.value)+"tn";}

	if (one=="Tone" && two=="Kilogram"){
		 		mresult.value =  parseFloat(parseFloat(minput.value) *(1000)) +"Kg";}

	if (one=="Tone" && two=="Gram"){
		 		mresult.value =  parseFloat(parseFloat(minput.value) *(1000000)) +"g";}

	if (one=="Tone" && two=="Milligram"){
		 		mresult.value =  parseFloat(parseFloat(minput.value) *(1000000000)) +"mg";}	
//kilogram
	if (one=="Kilogram" && two=="Kilogram"){
		 		mresult.value =  parseFloat(minput.value)+"kg";}

	if(one=="Kilogram" && two=="Tone"){
		 		mresult.value =  parseFloat(parseFloat(minput.value)* (0.001)) +"tn";}

	if(one=="Kilogram" && two=="Gram"){
		 		mresult.value = parseFloat((parseFloat(minput.value)*(1000))) + "g";}

	if (one=="Kilogram" && two=="Milligram"){
		 		mresult.value =  parseFloat(parseFloat(minput.value) *(1000000)) +"mg";}
//gram
	if(one=="Gram" && two=="Gram"){
		 		mresult.value =  parseFloat(minput.value)+"g";}

	if(one=="Gram" && two=="Milligram"){
		 		mresult.value =  parseFloat(parseFloat(minput.value)*(1000))+"mg"}

	if(one=="Gram" && two=="Kilogram"){
		 		mresult.value = parseFloat(parseFloat(minput.value)*(0.001)) +"kg";}

	if (one=="Gram" && two=="Tone"){
		 		mresult.value =  parseFloat(parseFloat(minput.value) *(0.000001)) +"tn";}
//milligram	
	if(one=="Milligram" && two=="Milligram"){
		 		mresult.value =  parseFloat(minput.value)+"mg";}

	if(one=="Milligram" && two=="Kilogram"){
		 		mresult.value =  parseFloat(parseFloat(minput.value)*(0.000001))+"kg"}

	if(one=="Milligram" && two=="Gram"){
		 		mresult.value = parseFloat(parseFloat(minput.value)*(0.001)) +"g";}

	if (one=="Milligram" && two=="Tone"){
		 		mresult.value =  parseFloat(parseFloat(minput.value) *(0.000000001)) +"tn";}
	
	if (minput.value==""){
		 		alert("Please enter a valid number value to be converted");
		 		mresult.value=""};	
	}

