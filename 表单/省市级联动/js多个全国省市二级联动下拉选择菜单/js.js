// JavaScript Document
var where = new Array();     
function comefrom(loca,locacity) { this.loca = loca; this.locacity = locacity; }      
where[0]= new comefrom("选择项目","选择项目");    
where[1] = new comefrom("项目1","选择项目|项目1|项目1|项目1|项目1");     
where[2] = new comefrom("项目2","选择项目|项目1|项目1");      
where[3] = new comefrom("项目3","选择项目|项目1|项目1|项目1|项目1");
function select(provinceId,cityId) {    
    with(document.getElementById(provinceId)) { var loca2 = options[selectedIndex].value; }    
    for(i = 0;i < where.length;i ++) {    
        if (where[i].loca == loca2) {    
                loca3 = (where[i].locacity).split("|");    
                for(j = 0;j < loca3.length;j++) {     
                    with(document.getElementById(cityId)) {     
                        length = loca3.length;     
                        options[j].text = loca3[j];     
                        options[j].value = loca3[j];     
                    //  var loca4=options[selectedIndex].value;    
                    }    
                }    
                break;    
        }    
    }    
}     
    
    
function initCities(province,city,provinceId,cityId) {    
    
    var flag = 0;    
    with(document.getElementById(provinceId)) {    
        length = where.length;    
        for(k=0;k<where.length;k++) {     
            options[k].text = where[k].loca;     
            options[k].value = where[k].loca;     
            if(province !=null && province == where[k].loca){    
                //带有数值的初始化    
                options[k].text = "选择主营项目";     
                options[k].value = "选择主营项目";    
                flag = 1;    
            }    
        }    
        if(province !=null && province != ""){    
            options[selectedIndex].text = province;     
            options[selectedIndex].value = province;    
        }else{    
            options[selectedIndex].text = where[0].loca;     
            options[selectedIndex].value = where[0].loca;    
        }    
    }    
    with(document.getElementById(cityId)) {    
        //未选择省份    
        if(flag == 0){    
            var loca3 = (where[0].locacity).split("|");    
            length = loca3.length;    
            for(var l=0;l<length;l++) {     
                options[l].text = loca3[l];     
                options[l].value = loca3[l];     
            }    
            options[selectedIndex].text = loca3[0];     
            options[selectedIndex].value = loca3[0];    
        }else{    
        //选择了省份,先遍历找出省份的where    
            temp= 0;    
            for(var p=0;p<where.length;p++){    
                if(where[p].loca == province)    
                    break;    
            }    
            var loca4 = (where[p].locacity).split("|");    
            length = loca4.length;    
            for(var c=0; c< length;c++){    
                options[c].text = loca4[c];    
                options[c].value = loca4[c];    
                if(city == loca4[c]){    
                    options[c].text = "选择主营项目";    
                    options[c].value = "选择主营项目";    
                    temp = c;    
                }    
            }    
            options[selectedIndex].text = loca4[temp];     
            options[selectedIndex].value = loca4[temp];    
        }    
    }    
}   