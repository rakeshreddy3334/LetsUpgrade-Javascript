Employee=[
    {
        name: "ravi",
        age: 25,
        city:"hyderabad",
        salaray:100000
    },
    {
        name: "ramu",
        age: 22,
        city:"Secundarabad",
        salaray:50000
    },
    {
        name: "shyam",
        age: 30,
        city:"hyderabad",
        salaray:200000
    },
    {
        name: "Amitej",
        age: 30,
        city:"goa",
        salaray:100000
    },
    {
        name: "pradymuna",
        age: 35,
        city:"banglore",
        salaray:50000
    }
];

function display(emp){
    var tablehtml="";
    emp.forEach(function(e,index){
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.city}</td>
        <td>${e.salaray}</td>
        <td><button onClick="deleteRow(${index})">Delete row</button></td>
        </tr>`;

        tablehtml+=currentrow;

    });
    
    document.getElementsByClassName('tableData')[0].innerHTML=tablehtml;
}
display(Employee);

function searchTable(){
    var text= document.getElementById('value').value;
    let result= Employee.filter(function(e){
        return (e.name.toUpperCase().indexOf(text.toUpperCase())!=-1 )||(e.city.toUpperCase().indexOf(text.toUpperCase())!=-1 );
    });
    display(result);
}

function deleteRow(index){
    Employee.splice(index,1);
    display(Employee);
}