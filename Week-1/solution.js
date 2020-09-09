//WEEK_1 Day_2 Assignment 

//1)program to search for a particular character in a string 
                    
                        function checkchar(str,ch){
                            for(i=0;i<str.length;i++){
                              if (ch==str[i]){
                                console.log(`found at ${i} position`);
                                return 1;
                              }
                            }
                        }
                    
                        //user input
                        var str="hello World";
                        var ch='W';
                    
                        checkchar(str,ch)
                        
                    
//2)program to convert minutes into seconds 
                    
                        function convertTo(m){
                            return m*60;
                        }
                    
                        //user input
                        var minutes=20;
                        
                        console.log(`after converting = ${convertTo(minutes)} secs`);
                    
                    
//3)program to search for an element in array of strings ***
                    
                        //user input
                    
                        var arr_str = ['apple','ball','cat'];
                        var str='ball';
                    
                        console.log("printing the element postion in array of strings")
                        for(i=0;i<arr_str.length;i++){
                            if(str == arr_str[i]){
                                console.log(`element "${str}" found at ${i}`);
                            }
                        }
                        
                        
// 4)program to display only elements containing 'a' in them from an array 
                    
                        //user input
                    
                        var arr_str = ['apple','bulb','buffer','ball','cat'];
                        
                        console.log("printing the words containing 'a' in array of strings");
                        for(i=0;i<arr_str.length;i++){
                          if(arr_str[i].includes('a')){
                            console.log(arr_str[i]);
                            }
                        }
                        
                        
//5)print an array in reverse order 
                    
                        //user input
                        var arr=[10,20,30,40,50];
                        
                        arr.sort();
                        lst=[];
                        for(i=arr.length-1;i>=0;i--)
                        {
                          lst.push(arr[i]);
                        }
                        
                        console.log(...lst) 
                        
                                                                    
                                                //------- THE END -----
                    