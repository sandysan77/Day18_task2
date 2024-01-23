let getAPI = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
let getAPI1 = getAPI.then((msg) => msg.json());
getAPI1.then((msg2) => {
    for (var i = 0; i<msg2.length; i++) {
        foo(msg2,i);
    }
});

function foo(value1,value2){
    let createEle = document.createElement("img");
    createEle.setAttribute("src",value1[value2].url);
    // createEle.setAttribute("width","400");
    // createEle.setAttribute("height","400");
    document.body.append(createEle);
}

var creatediv = document.createElement("div");





