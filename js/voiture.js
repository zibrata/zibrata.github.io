//object person
/*var person = {
  name : "Alexandre",
  age : 20,
  ville : "Croissy-sur-Seine"
};*/

function printReverse(tab) {
  for (var i = 0 ; i < tab.length ; ++i) {
    console.log(tab[tab.length - i - 1]);
  }
}

var movies = [
  {
    title : "Harry Potter 7",
    watched : true,
    rating : 5
  },
  {
    title : "Mad Max",
    watched : false,
  },
  {
    title : "Snowden",
    watched : true,
    rating : 4.5
  }
]



function isUniform(tab) {
  for (var i = 0 ; i < tab.length ; ++i) {
    if (tab[0] === tab[i+1]) {
      return true;
    }
    else {
      return false;
    }
  }
}

function sumArray(tab) {
  var sum = 0;
  for (var i = 0 ; i < tab.length ; ++i) {
    sum = sum + tab[i];
  }
  return sum;
}

function maxArray(tab) {
  var max = 0;
  for (var i = 0 ; i < tab.length ; ++i) {
    if (max < tab[i]) {
      max = tab[i];
    }
  }
  return max;
}


function todo() {
  var todoList = new Array();
  var todo = prompt("What would you do ?");
  while (todo != "quit") {

    if (todo == "list") {
      console.log("***********");
      for (var i = 0 ; i < todoList.length ; ++i) {
        console.log(i+" : "+todoList[i]);
      }
      console.log("***********");
    }

    else if (todo == "add") {
      todo = prompt("Add a new todo");
      console.log(todo + " added to list");
      todoList.push(todo);
    }

    else if (todo == "delete") {
      todo = prompt("Enter index of todo to delete");
      var message = todoList[todo];
      todoList.splice(todo, 1);
      console.log(message + " removed");
    }
    todo = prompt("What would you do ?");
  }
}





function arewethereyet() {
  var message = prompt("Are we there yet ?!");
  while (message != "yes" && message != "yeah" && message.indexOf("yes") == -1) {
    message = prompt("Are we there yet ?!");
  }
  console.log("Yeah we finally did it !");
}

function bonjour() {
  console.log("bjr");
}

function isEven(nb) {
  if ((nb % 2) == 0) {
    return true;
  }
  return false;
}

function kebabToSnake(phrase) {
  var remplacement = phrase.replace(/-/g, "_");
  console.log(remplacement);
  return remplacement;
}

function factorial() {
  var nb = prompt("Veuillez saisir un nombre");
  if (nb == 0) {
    nb = 1;
  }
  else {
    for (var i = nb - 1 ; i > 0 ; --i) {
      nb = nb * i;
    }
  }
  console.log(nb);
  return nb;
}




//guessing game
function guessingGame() {
  var random = Math.floor(Math.random() * 11); //stipule que le rand sera entre 0 et 10
  var choix = prompt("Veuillez rentrez un chiffre entre 0 et 10");
  while (Number(choix) != random) {
    if (choix < random) {
      choix = prompt("Trop petit, veuillez recommencer");
    }
    if (choix > random) {
      choix = prompt("Trop grand, veuillez recommencer");
    }
    if (choix == random) {
      break;
    }
  }
  alert("Bravo vous avez trouvé");
}


function calcul() {
  //print all numbers between -10 and 19
  for (var nb = -10 ; nb <= 19 ; ++nb) {
    console.log(nb);
  }

  console.log("\n");

  for (var nb = 10 ; nb <= 40 ; ++nb) {
    if ((nb % 2) == 0) {
      console.log(nb);
    }
  }

  console.log("\n");

  for (var nb = 300 ; nb <= 333 ; ++nb) {
    if ((nb % 2) == 1) {
      console.log(nb);
    }
  }
  console.log("\n");
  for (var nb = 5 ; nb <= 50 ; ++nb) {
    if (((nb % 5) == 0) && ((nb % 3) == 0)) {
      console.log(nb);
    }
  }
}











/*1 ask for user first name
var prenom = prompt('Quel est votre prénom ?');
//2 ask for user last name
var nom = prompt('Quel est votre nom ?');
//3 ask for user age
var age = prompt('Quel est votre âge ?');
//4 print out full username in a sentence
alert('Bonjour ' + prenom + ' ' + nom +'.');
//5 print out user age
alert('Vous avez ' + age + ' ans');*/

/*         Calcul existence jours
var age = prompt('Quel âge avec-vous ?');
var annee = 365.25;
var existence = age * annee;
alert('Vous vivez depuis '+ existence + ' jours sur Terre');*/

/*var age = prompt('Quel est votre âge ?');

while (age < 0) {
  age = prompt('Age non conforme, veuillez le resaisir');
}

if (age == 21) {
  alert('Happy 21st birthday');
}

if((age % 2) == 1) {
  alert('Your age is odd');
}

if((age % Math.sqrt(age)) == 0) {
  alert("Your age is a perfect square");
}*/


function division() {
  var nb = prompt('Rentrez un nombre : ');
  var diviser = nb / 2;
  return diviser;
}

function afficher() {
  var nb = division();
  alert(nb);
}

function conversion() {
  var nb = prompt('Rentre un nombre : ');
  var nb_francs = nb * 6.55957;
  alert(nb + '€ équivaut à ' + nb_francs + ' Frs');
}

function Multiplication() {
  var nb1 = prompt('Rentrez un premier nombre : ');
  var nb2 = prompt('Rentrez un deuxieme nombre : ');
  alert('Multiplication de '+nb1+ ' par '+nb2);
  resultat = nb1*nb2;
  alert(nb1+' x '+nb2+' = '+resultat);
}
