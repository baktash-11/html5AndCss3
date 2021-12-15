(()=>{
    console.log("Welcome to Agorthems.js")


    
    function Start(){
        console.log('App is started')

        // Gcd(8, 20)
        Gcd(60, 96)
    }


    //arrys
    let numbers = [4, 5, 6, 7, 4, 3, -4];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        
    }

    let dinnerChoices = [
        ['Salad', 'Soup', 'Cheese Plate'], 
        ['Chicken', 'Salmon', 'Lasana']
    ];


    let mainDish = dinnerChoices[1];
    let appIndex = dinnerChoices[0];
    
    console.log(dinnerChoices);
    let jagged = [
        [89, 43, 23], 
        [32, 31, 92, 33], 
        [3, 2, 9, 3 ,100]
    ];
    console.log(jagged[2][4]);

    let item = 99;
    let found = false; 

    console.log("=====================================jagged=====================================")
    //seaching in jagged array
    for (let i = 0; i < jagged.length; i++) {
        for (let j = 0; j < jagged[i].length; j++) {
            // console.log(jagged[i][j]);
            if(item == jagged[i][j]){
                found = true
                console.log(found);
            }else{
                console.log("Couldnt find the item "+ found);
            }
            
            
        }
        
    }

    let twoDime=[
        [1, 2, 3, 4, 4, 5, 5],
        [1, 2, 3, 4, 5, 6, 7], 
        [1, 3, 4, 5, 6, 7, 8], 
        [7, 6, 5, 4, 3, 2, 1],
    ]
    let a=0;
    for (let i = 0; i < twoDime.length; i++) {
        console.log(twoDime[i])
        console.log[i+"=======i"]
        for (let j = 0; j < twoDime[i].length; j++) {
            console.log(twoDime[i][j]);
            console.log(j+"_______j")
            a+=1

            
        }
        
        
    }
    console.log(a);

    function Gcd(a, b){/**Common denomiator's algorithem */
        let temp=0; 
        // console.log( "a ="+ a +" b= "+ b + " temp = " +temp)
        while(b !=0){
            temp = a; 
            a = b; 
            b = temp % b
            // console.log("a = "+ a +" b = "+ b + " temp = " +temp )
        }
        console.log(a)
    }

    window.addEventListener('load', Start);
})();