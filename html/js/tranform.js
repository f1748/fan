function csstransform(el,attr,val){
        if(!el.transform){
            el.transform = {};
            
        }
        if(arguments.length>2){

                el.transform[attr] = val;
               // console.log(arguments)
                var sVal = '';
            for(var s in el.transform){//键值对 s是建
             //   console.log('s:'+s)
                switch(s){
                    case "rotate":
                    case "skewX":
                    case "skewY":
                        sVal += s+"("+el.transform[s]+"deg)";
                        break;
                    case "translateX":
                    case "translateY":
                        sVal += s+"("+el.transform[s]+"px)";
                        break;
                    case "scaleX":
                    case "scaleY":
                    case "scale":
                        sVal += s+"("+el.transform[s]+")";
                     //   console.log("el.transform[s]:"+el.transform[s])//0.2
                       // console.log("sval:"+sVal)//scale(0.2)
                        //console.log('s:'+s)
                        break;
                }
                el.style.WebkitTransform = el.style.transform = sVal;
                
             //   console.log("el.style.transform:"+el.style.transform)
            }
        }else{
            val = el.transform[attr];
            if(typeof val == "undefined"){
                if(attr=='scale' || attr == "scaleX" || attr == "scaleY"){
                    val = 1;
                }else{
                    val ==0;
                }
            }
            return val;
        }
        
      }