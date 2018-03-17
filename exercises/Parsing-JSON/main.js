var getPokemon = document.getElementById("pokemon");

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
   if (xhr.readyState === 4 && xhr.status == 200) {
       var jsonData = xhr.responseText;
       var data = JSON.parse(jsonData);
       var pokemonArr = data.objects[0].pokemon;
       var morePokemon = pokemonArr;
       for (var i=0; i<pokemonArr.length; i++){
           var parsePokemon = pokemonArr[i].name;
        //    console.log(parsePokemon);
           var h3 = document.createElement("h3");
           h3.innerHTML = parsePokemon;
           getPokemon.appendChild(h3);
       }
   }
}
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
