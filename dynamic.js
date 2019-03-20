function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  skill(data.career);
  Details(data.Educational);
  skills(data.skills);
})

var parent=document.querySelector(".parent");
var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");

function profile (pro){
  var image=document.createElement('img');
  image.src=pro.img;
  child2.appendChild(image);
  var nam=document.createElement('h2');
  nam.textContent=pro.name;
  child2.appendChild(nam);


  var email_id=document.createElement('h3');
  email_id.textContent=pro.email;
  child2.appendChild(email_id);
  parent.appendChild(child2);

}
function skill(c)
{
  var info1=document.createElement('h1');
  info1.textContent="Resume";
  child1.appendChild(info1);
  var hr=document.createElement('hr');
  child1.appendChild(hr);
  var h1=document.createElement("h1");
  h1.textContent="Career Objective";
  child1.appendChild(h1);
  var info=document.createElement("p");
  info.textContent=c.info;
  child1.appendChild(info);
  parent.appendChild(child1);
}
function Details(d){
  var det=document.createElement("h1");
  det.textContent="Educational Details";
 child1.append(det);
 parent.append(child1)
 var hr=document.createElement('hr');
 child1.appendChild(hr);

var table=document.createElement('table');
let row='';
table.border='2';
row +="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"Institute"+
"</th>"+"<th>"+"per"+"</td>"+"</tr>"
for(i in d)
{

  row +="<tr>"+"<td>"+d[i].sno+"</td>"+"<td>"+d[i].degree+"</td>"+"<td>"+d[i].Institute+
  "</td>"+"<td>"+d[i].per+"</td>"+"</tr>"
}
table.innerHTML=row;
child1.append(table);
parent.append(child1);

}
function skills(s){
  var ab=document.createElement('h2');
ab.textContent="Skills set";
child1.append(ab);

var ul=document.createElement(ul)
child1.append(ul);
for(i in s){
  var li=document.createElement("li");
  li.textContent=s[i].info;
  ul.append(li);

}
}
