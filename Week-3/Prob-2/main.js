let Bus=[];

function display(temp= undefined){
    if(localStorage.getItem("bus")==null){
        //console.log("hi")
        var x=`<p>The table is empty.Please add few buses to the table</p>`;
        document.getElementsByClassName("tableData")[0].innerHTML =x;
        return ;
    }
    let tabledata="";
    if(temp==undefined){
        Bus = JSON.parse(localStorage.getItem("bus"));
    }
    else{
        Bus=temp;
    }
   
    Bus.forEach(function (b, index) {
        let currentrow = `<tr>
        <td>${b.name}</td>
        <td>${b.source}</td>
        <td>${b.dest}</td>
        <td>${b.no}</td>
        <td>${b.capacity}</td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tableData")[0].innerHTML = tabledata;
  
}
window.onload = function () {
    display();
}

function addBus(event){
    event.preventDefault();
    let name= document.getElementById('bname').value;
    let source= document.getElementById('bsource').value;
    let destination= document.getElementById('bdest').value;
    let number= document.getElementById('bno').value;
    let capacity= document.getElementById('bcapacity').value;
    let newBus={};
    newBus.name= name;
    newBus.source= source;
    newBus.dest = destination;
    newBus.no = number;
    newBus.capacity= capacity;
    //console.log(Bus)
    if (localStorage.getItem("bus")==null){
        Bus.push(newBus);
        localStorage.setItem("bus",JSON.stringify(Bus));
    }
    else{
        Bustemp=JSON.parse(localStorage.getItem("bus"));
        Bustemp.push(newBus);
        localStorage.setItem("bus",JSON.stringify(Bustemp));
    }

    display();

    //clearing the values after adding
    document.getElementById('bname').value="";
    document.getElementById('bsource').value="";
    document.getElementById('bdest').value="";
    document.getElementById('bno').value="";
    document.getElementById('bcapacity').value="";
}

function searchBus(){
    //console.log("hi")
    let text = document.getElementById('Svalue').value;

    Bus = JSON.parse(localStorage.getItem("bus"));
    let result= Bus.filter(function(b){
        return (b.source.toUpperCase().indexOf(text.toUpperCase())!=-1 )||(b.dest.toUpperCase().indexOf(text.toUpperCase())!=-1 );
    });
    display(result);
}
function clearStorage(){
    localStorage.clear();
    display();
}