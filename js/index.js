//Arrays de las listas

let listGames = [];
let listPlayers = [];
let listTours = [];

//Clase Game
class Game{
  constructor(num, title, release, pegi, dev, type){
    this.num=num;
    this.title=title;
    this.release=release;
    this.pegi=pegi;
    this.dev=dev;
    this.type=type;
  }

}


//Clase Player
class Player{

  constructor(num, name, surname, gamer, dni, date, phone, email){
    this.num=num;
    this.name=name;
    this.surname=surname;
    this.gamer=gamer;
    this.dni=dni;
    this.date=date;
    this.phone=phone;
    this.email=email;
  }
}

//Clase Torneo
class Tour{

  constructor(num, torneig, joc, dia, hora, mplaces){
    this.num = num;
    this.torneig=torneig;
    this.joc=joc;
    this.dia=dia;
    this.hora=hora;
    this.mplaces=mplaces;
  }
}

//Para dibujar las tablas de la lista de juegos
function printTableGame(lGames){

  let bodyListGame = document.getElementById("listGame");
  bodyListGame.innerHTML="";

  listGames.forEach(function(value){
    let currentGame = value;
    let sGame = `
      <tr>
        <th scope="row">${currentGame.num}</td>
        <td>${currentGame.title}</td>
        <td>${currentGame.release}</td>
        <td>${currentGame.pegi}</td>
        <td>${currentGame.dev}</td>
        <td>${currentGame.type}</td>
      </tr>`;
      bodyListGame.innerHTML+=sGame;
    });
}

//Para dibujar la tabla de la lista de los jugadores
function printTablePlayes(lPlayers){

  let bodyListPlayer = document.getElementById("listPlayer");
  bodyListPlayer.innerHTML="";

  listPlayers.forEach(function(value){
    let currentPlayer = value;
    let sPlayer = `
      <tr>
        <th scope="row">${currentPlayer.num}</td>
        <td>${currentPlayer.name}</td>
        <td>${currentPlayer.surname}</td>
        <td>${currentPlayer.gamer}</td>
        <td>${currentPlayer.email}</td>
      </tr>`;
      bodyListPlayer.innerHTML+=sPlayer;
    });
}

//Para dibujar la tabla para la lista de torneos
function printTableTournament(lTours){

  let bodyListTour = document.getElementById("listTour");
  bodyListTour.innerHTML="";

  listTours.forEach(function(value){
    let currentTour = value;
    let sTour=`
      <tr>
        <th scope="row">${currentTour.num}</td>
        <td>${currentTour.torneig}</td>
        <td>${currentTour.joc}</td>
        <td>${currentTour.dia}</td>
        <td>${currentTour.hora}</td>
        <td>${currentTour.mplaces}</td>
      </tr>`;
      bodyListTour.innerHTML+=sTour;
    }
  );

}

//Validar el formulario de juegos
function validateGameForm(){
  const elements = document.getElementById("frm-game").elements;
  for (let e of elements) {
    if ((e.type === "text" || e.type === "date" || e.type === "number" ) && e.value === ""){
      message("Tots els camps són obligatoris");
      e.focus();
      return false;
    }
  }
  return true;
}

//Generador de mensajes y avisos
function message(msg){
  $("#txt-message").html(msg);
  $('#modal-message').modal('show');
}

//Para comprobar si el juego esta repetido
function isRepeatedGame(nameGame){
  for(let game in listGames) {
      if (game.name == nameGame) return true;
  }
  return false;
}

//La función de añadir el juego a la tabla
function addGame(){
  console.log("action:nou joc");
  if(!validateGameForm()) return false;

  if (isRepeatedGame( $("#game_name").val()) ){
    message("Joc repetit");
  }else{
    let codiGame = +listGames.length;
    codiGame += 1;
    let aDate = ($("#game_release").val()).split("-");
    let release = aDate[2]+"/"+aDate[1]+"/"+aDate[0];
    let oGame = new Game(codiGame,
                        $("#game_name").val(),
                        release,
                        $("#game_pegi").val(),
                        $("#game_dev").val(),

                        $("#game_genr").val()

                        );

    listGames.push(oGame);

    /*console.log("info-add:"+oGame.print());*/
    document.forms["frm-game"].reset();

    printTableGame(listGames.lGames);
  }
}

//Para evitar la repetición de inscribir el jugador. 
function isRepeatedPlayer(dniPlayer){
  for(let player in listPlayers) {
      if (player.dni == dniPlayer) return true;
  }
  return false;
}

//Para validar el nombre del jugador
function validatePlayerForm(){
  const elements = document.getElementById("frm-player").elements;
  for (let e of elements) {
    if ((e.type === "text" || e.type === "date" || e.type === "number" ) && e.value === ""){
      message("Tots els camps són obligatoris");
      e.focus();
      return false;
    }
  }
  return true;
}

//La función de añadir el jugador a la tabla
function addPlayer(){
  console.log("action:nou jugador");
  if(!validatePlayerForm()) return false;

  if (isRepeatedPlayer( $("#player_dni").val()) ){
    message("Jugador repetit");
  }else{
    let codiPlayer = +listPlayers.length;
    codiPlayer += 1;
    let aDate = ($("#player_date").val()).split("-");
    let born = aDate[2]+"/"+aDate[1]+"/"+aDate[0];
    let oPlayer = new Player(codiPlayer,
                        $("#player_name").val(),
                        $("#player_lname").val(),
                        $("#player_username").val(),
                        $("#player_dni").val(),
                        born,
                        $("#player_phone").val(),
                        $("#player_mail").val(),
                        );

    listPlayers.push(oPlayer);

    document.forms["frm-player"].reset();

    printTablePlayes(listPlayers.lPlayers);
  }
}

//Para identificar si el titulo del torneo esta repetido
function isRepeatedTour(nameTour){
  for(let tour in listTours) {
      if (tour.name == nameTour) return true;
  }
  return false;
}

//Para validar el formulario de torneos
function validateTourForm(){
  const elements = document.getElementById("frm-tour").elements;
  for (let e of elements) {
    if ((e.type === "text" || e.type === "date" || e.type === "number" ) && e.value === ""){
      message("Tots els camps són obligatoris");
      e.focus();
      return false;
    }
  }
  return true;
}

//La función de añadir el torneo a la tabla
function addTour(){
  console.log("action:nou torneig");
  if(!validateTourForm()) return false;

  if (isRepeatedTour( $("#tour_name").val()) ){
    message("Torneig repetit");
  }else{
    let codiTour = +listTours.length;
    codiTour += 1;
    let aDate = ($("#tour_day").val()).split("-");
    let dia = aDate[2]+"/"+aDate[1]+"/"+aDate[0];
    let oTour = new Tour(codiTour,
                        $("#tour_name").val(),
                        $("#tour_game").val(),
                        dia,
                        $("#tour_hour").val(),
                        $("#tour_max").val()
                        );

    listTours.push(oTour);

    document.forms["frm-tour"].reset();

    printTableTournament(listTours.lTours);
  }
}

window.onload=function(){
  listGames.push( new Game(1, "Mario Kart 8 Deluxe", "27/04/2016", "+3", "Nintendo", "Carreras"));
  listGames.push( new Game(2, "Apex Legends", "04/02/2019", "+16", "Respawn Entertraiment", "Shooters"));
  listGames.push( new Game(3, "Fortnite", "21/07/2017", "+12", "Epic Games", "Shooters"));

  printTableGame(listGames);

  listPlayers.push( new Player(1, "Nuria", "Gonzalez", "PoppyPi","55555555R", "25/02/1990", "666666666", "pop_pi@email.com"));
  listPlayers.push( new Player(2, "Juan", "Herbez", "JPro666", "9999999A", "06/06/1996", "696969696", "amanterechoncho@aol.com"));
  listPlayers.push( new Player(3, "Sergio", "Lifante", "Quetzal", "7777777B", "15/05/1989", "699699699", "QFurro@email.com"));

  printTablePlayes(listPlayers);

  listTours.push( new Tour(1, "Pelea de salchichas", "Fortnite", "27/09/2019", "17:30", "24"));
  listTours.push( new Tour(2, "Carreras Mágicas", "Mario Kart 8", "07/10/2019", "19:00", "36"));
  listTours.push( new Tour(3, "YTMKGRANDPRIX", "Mario Kart 8", "15/10/2019", "19:00", "36"));

  printTableTournament(listTours);
}
