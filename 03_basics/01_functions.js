function sayMyName(){
    console.log("Heisenberg");
}
sayMyName()


// function addTwoNumbers(a,b){    
//     console.log(a+b);    
// }

function addTwoNumbers(n1,n2){
    // let result = n1 + n2
    // return result
    return n1 + n2
}

const x = addTwoNumbers(10,20)

console.log(x);


function loginUserMessage(username){
    if (!username){
        console.log("Please enter username");  
        return 
    }
    return `${username} just logged in`
}

// result = loginUserMessage()

console.log(loginUserMessage());
