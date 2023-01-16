var date = document.getElementById("date");
var note = document.getElementById("note");
var submit = document.getElementById("submit");
var happydays = document.getElementById("happydays");
        
submit.addEventListener('click', function () {
axios.post('https://sheetdb.io/api/v1/6f60zmxdjymm1', {
"data":{"date":date.value,"note":note.value}

}).then(response=>{
console.log(response.data);
alert("Yay!!Sucessfully recorded.");
    sheetdb_upd();
});                     
});


