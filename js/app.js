// Your code should go here
//new
//console.log(USERS);

const data=USERS;



console.log(data.length);
displaydata(data);

function displaydata(data)
{

    var table =document.getElementById('myTable');
    table.innerHTML="";

    console.log(table);
    var totalrows="";

    for(var i=0;i<data.length;i++)
    {
       // console.log(data[i].name);
var ellipsis=0;
var ellipsisname="";
      // var row='<tr><td>${data[i].name.last}</td></tr>'
      var fullname=""
      if ((data[i].name.last.length > 10)||(data[i].name.first.length > 10)) {
         fullname =data[i].name.last.substring(0, 10) + '...';
        ellipsis=1
        ellipsisname=data[i].name.last+" "+data[i].name.first;
      }
      else
      {
      fullname =data[i].name.last+" "+data[i].name.first;
      ellipsis=0;
      }

        //var row=
        //"<tr>"+ 
      
    //     "<td><img src='"+sanitize(data[i].pictureUrl)+"' class='img-rounded'/></td>"
    //     if(ellipsis===1){
         
    //    row+= "<td>"+
    //    "<div id='divshow' zindex='-1' class=''> </div>"+
    //    "<div onmouseover =document.getElementById('divshow').innerHTML='"+data[i].name.last+"'>"+sanitize(fullname)+"</div>"+"</td>"
    // }
    // else 
    // row+="<td>"+sanitize(fullname)+"</td>";
    // row+=   "<td>"+sanitize(data[i].email)+"</td>"+
    //     "<td>"+ sanitize(data[i].phone)+"</td>"+         
    //    "<td>"+sanitize(data[i].accountBalance)+"</td>"+
    //     "</tr>";
        //console.log(row);
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.className="col";
        var td2=document.createElement("td");
       
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        var td5=document.createElement("td");
       // td2.className="col-3";
      //  td3.className="text-info";
       // td4.className="col-1";
        //td5.className="col";
        td1.innerHTML="<img src='"+sanitize(data[i].pictureUrl)+"' class='img-thumbnail'/>"       
        
        td2.innerHTML=sanitize(fullname);
        
        td3.innerHTML=sanitize(data[i].email);
        td4.innerHTML= sanitize(data[i].phone);
        td5.innerHTML=sanitize(data[i].accountBalance);

        tr.appendChild(td1);
        tr.appendChild(td2); 
       // td4.style.width="10%";
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);


        
table.append(tr);
//totalrows+=row;

      
    }
    //table.innerHTML=totalrows;

}



function escapeRegExp(str) {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
        return str.trim();
}

function sanitize(string) {
    if(isNaN(string)) 
    {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    //const reg = /[&<>"'/]/ig;
    //return string.replace(reg, (match)=>(map[match]));
    return string.replace(map ? /[&<>'"]/g : /[&<>]/g, function(c) {
        return map[c];
    });
}
else return string;
  }

var interval;
    function OnStart()
    {
        document.getElementById('sort').disabled=true;
         interval=setInterval(function() {
            ChangeOrder()  ;  
        }, 1000);
    }

    function ChangeOrder()
    {
        const Reordereddata=data;
        var newPos,
        temp;
        for(var i=Reordereddata.length-1;i>0;i--){
            newPos=Math.floor(Math.random()*(i+1));
            temp=Reordereddata[i];
            Reordereddata[i]=Reordereddata[newPos];
            Reordereddata[newPos]=temp;
        }
        displaydata(Reordereddata);
        
    }


    function onstop()
    {
        if(typeof interval !== 'undefined') 
        clearInterval(interval)
        document.getElementById('sort').disabled=false;
    }

    function OnSorting()
    {
        if(typeof interval !== 'undefined') 
        clearInterval(interval)
        
        displaydata(USERS.sort(CustomComparator));
    }
    function CustomComparator(a,b)
    {
        if(a.accountBalance==b.accountBalance)
            return  b.name.last-a.name.last;
            else
            return  b.accountBalance-a.accountBalance;

        
        
    }