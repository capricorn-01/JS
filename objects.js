const mysum = Symbol("key1")

const JsUsers = {
    name: "Harshit",
    mysum: "mykey1",
    age: 22,
    location: "Jaipur",
    email: "hrajwani11@gmail.com",
    Isloggedin: false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers["mysum"]);

JsUsers.email = "hrajwani@google.com"
//Object.freeze(JsUsers)
JsUsers.email = "hrajwani@microsoft.com"
//console.log(JsUsers);

JsUsers.greeting=function(){
    console.log("Hello JS User");
    
}
console.log(JsUsers.greeting());




