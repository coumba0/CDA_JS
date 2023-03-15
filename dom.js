let username= document.querySelector(`#username`)
username.addEventListener("input", () => {
    let root = username.value
    document.querySelector(`#root`).innerHTML = "root " + bonjour
})

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <input type="number" id="num1" placeholder="Entrez un nombre">

    <button id="btn">Envoyer</button>

    <div id="résultat"></div>

    <script src="/dom2exo2.js"></script>


</body>
</html>
/*
    Ecrivez un code HTML + JS qui permet :
    De demander à l'utilisateur d'entrer un nombre
    D'afficher à l'utilisateur son nombre multiplié par 2
    Par exemple : 
        Si l'utilisateur entre 5
        Le code doit afficher 10
        Si l'utilisateur entre 12
        Le code doit afficher 24
    Vous ne devez PAS utiliser de console.log
    Vous DEVEZ afficher le résultat directement sur la page
*/


let btn = document.querySelector(`#btn`)
btn.addEventListener("click", () => {
    let resultat = Number(num1.value) + Number(num2.value)
    document.querySelector(`#resultat`).innerHTML = resultat
})
