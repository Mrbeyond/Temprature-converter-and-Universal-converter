	function distnow(){
	var one, two;
	one = dista.value;
	two = distb.value;
	dresult.value = "";
	dista.focus();

//Beginning of kilometer
	if (one=="kilometer" && two=="kilometer"){
		 		dresult.value = parseFloat(dinput.value) +"km";}

	if (one=="kilometer" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *(39370.078740157)) +"in";} 

	if (one=="kilometer" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *(0.6213711922) ) +"mi";}	 

	if (one=="kilometer" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *(3280.8398950131))+"ft";}

	if(one=="kilometer" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value) *1000)+"m";}

	if(one=="kilometer" && two=="Centimeter"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)*(100000)) + "cm";}

	if(one=="kilometer" && two=="Millimeter"){
		 		dresult.value = parseFloat(parseFloat(dinput.value)* (1000000)) +"mm";}

	if(one=="kilometer" && two=="Yard"){
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
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0009144))+"km";}

	if(one=="Yard" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.9144))+"m";}

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

	if(one=="Feet" && two=="kilometer"){
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
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.001))+"km";} 

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

//Beginning of Centimet		 		
	if(one=="Centimeter" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0000062137119223733))+"mi";} 

	if(one=="Centimeter" && two=="Kilometer"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00001))+"km";}  

	if(one=="Centimeter" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.01))+"m";}    

 	if(one=="Centimeter" && two=="Feet") {
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.032808398950131))+"ft";}   

	if(one=="Centimeter" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.010936132983377))+"yd";}  

	if(one=="Centimeter" && two=="Centimeter"){
		 		dresult.value =  parseFloat(dinput.value) +"cm";}  

	if(one=="Centimeter" && two=="Millimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(10))+"mm";}	

	if(one=="Centimeter" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.39370078740157))+"in";} 
//Beginning of Milliimeter		 		
	if(one=="Milliimeter" && two=="Mile"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.00000062137119223733))+"mi";}

	if(one=="Milliimeter" && two=="Kilometer"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.000001))+"km";}

	if(one=="Milliimeter" && two=="Meter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.001))+"m";}

 	if(one=="Milliimeter" && two=="Feet"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0032808398950131))+"ft";}  

	if(one=="Milliimeter" && two=="Yard"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.0010936132983377))+"yd";}

	if(one=="Milliimeter" && two=="Centimeter"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.1))+"cm";}	

	if(one=="Milliimeter" && two=="Millimeter"){
		 		dresult.value =  parseFloat(dinput.value) +"mm";}

	if(one=="Milliimeter" && two=="Inch"){
		 		dresult.value =  parseFloat(parseFloat(dinput.value)*(0.039370078740157))+"in";}

if (dinput.value==""){
		 		alert("Please enter a valid number value to be converted");
		 		dresult.value=""}
}