//Question1 --- webpage containing image and 3 buttons

    function secondButton(){
        //console.log("hi");
        let img_tag= document.getElementsByClassName('my-image');
        img_tag[0].src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jIxBJY66nfJRX4R4md-oggHaL1%26pid%3DApi&f=1";
    }

    function thirdButton(){
        //console.log("hi");
        let img_tag= document.getElementsByClassName('my-image');
        img_tag[0].src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FpjqOluW.jpg&f=1&nofb=1";
    } 

    function firstButton(){
        let img_tag= document.getElementsByClassName('my-image');
        img_tag[0].src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.A8hnEi8H4wCA097i6hLZfAHaNK%26pid%3DApi&f=1";
    }

// Question2 --- webpage containing two input fields and a button

    function myButton(){
        let text= document.getElementById("input1").value;
        let copy = document.getElementById("inputcopy");
        copy.value=text;
    }

// Question3 ---arrays of objects

    let avengers = [
        {
            name: "ravi",
            age: 10,
            country:"India",
            hobbies:['cricket','tabletennis'],
        },
        {
            name: "ram",
            age: 50,
            country:"US",
            hobbies:['tabletennis'],
        },
        {
            name: "rao",
            age: 60,
            country:"India",
            hobbies:['cricket','tabletennis'],
        },
        ];
        
        for (let i = 0; i < avengers.length; i++) {
            console.log(avengers[i]);
        }
    
//Question4 --- continuation of question 3
        console.log("from now on ,solution of question3");
        function age(a){
            console.log("printing the objects whose age is less than 30");
            a.forEach(function(e){
                if(e.age<30){
                    console.log(e);
                }
            })
        }

        function Country(a){
            console.log("printing the objects whose country is India");
            a.forEach(function(e){
                if(e.country=='India'){
                    console.log(e);
                }
            })
        }
        //calling the function
        age(avengers);
        Country(avengers);


//                  ------ THE END -------