let conData = [
    {id:1, Name:"KuyaKim", votecount:0},
    {id:2, Name:"JordanClarkson", votecount:0},
    {id:3, Name:"EdCaluag", votecount:0}
    ]
    let db = new Localbase('db')
    function createdb(){db.delete();
        for(var i=0;i<3;i++){
            console.log(typeof(conData[i]))
            db.collection('users').add(
                conData[i]
                
            )
        }
    }
function kkimplus(){
    db.collection('users').doc({ id: 1 }).get().then(data => {
        console.log(Object.values (data)[2]);
        console.log("asd");
        let x=parseInt(Object.values (data)[2]);
        let y=x+1;
        console.log(typeof(x));
        db.collection('users').doc({ id: 1 }).update({
            votecount:y
          })
       document.getElementById("kuyakimvote").innerHTML=y  
      })
    
}

function kkimminus(){
    db.collection('users').doc({ id: 1 }).get().then(data => {
        console.log(Object.values (data)[2]);
        console.log("asd");
        let x=parseInt(Object.values (data)[2]);
        let y=x-1;
        console.log(typeof(x));
        db.collection('users').doc({ id: 1 }).update({
            votecount:y
          })
       document.getElementById("kuyakimvote").innerHTML=y  
      })

}
function jcplus(){
    db.collection('users').doc({ id: 2 }).get().then(data => {
        console.log(Object.values (data)[2]);
        console.log("asd");
        let x=parseInt(Object.values (data)[2]);
        let y=x+1;
        console.log(typeof(x));
        db.collection('users').doc({ id: 2 }).update({
            votecount:y
          })
       document.getElementById("jordanclarksonvote").innerHTML=y  
      })

}
function jcminus(){
    db.collection('users').doc({ id: 2 }).get().then(data => {
        console.log(Object.values (data)[2]);
        console.log("asd");
        let x=parseInt(Object.values (data)[2]);
        let y=x-1;
        console.log(typeof(x));
        db.collection('users').doc({ id: 2 }).update({
            votecount:y
          })
       document.getElementById("jordanclarksonvote").innerHTML=y  
      })

}
function ecplus(){
    db.collection('users').doc({ id: 3 }).get().then(data => {
        console.log(Object.values (data)[2]);
        console.log("asd");
        let x=parseInt(Object.values (data)[2]);
        let y=x+1;
        console.log(typeof(x));
        db.collection('users').doc({ id: 3 }).update({
            votecount:y
          })
       document.getElementById("edcaluagvote").innerHTML=y  
      })

}
function ecminus(){
    db.collection('users').doc({ id: 3 }).get().then(data => {
        console.log(Object.values (data)[2]);
        console.log("asd");
        let x=parseInt(Object.values (data)[2]);
        let y=x-1;
        console.log(typeof(x));
        db.collection('users').doc({ id: 3 }).update({
            votecount:y
          })
       document.getElementById("edcaluagvote").innerHTML=y  
      })
    
}