var filtreTexte = new RegExp("^[A-Za-z ]+$");
var filtreAlphaNum = new RegExp("^\\w,*;*.*$");
var filtreCode = new RegExp("^\\d{5}$");
var filtreMail = new RegExp("^\\w.*\\w@.+[a-z]{2,4}$");

var validForm = true;

var nom = document.getElementById("nom");
var prenom = document.getElementById("prénom");
var sexe = document.getElementsByName("sexe");
var naissance = document.getElementById("date_naissance");
var codePostal = document.getElementById("code_postal");
var adresse = document.getElementById("adresse");
var ville = document.getElementById("ville");
var adresseMail = document.getElementById("email");
var sujet = document.getElementById("sujet");
var question = document.getElementById("question");
var accepter = document.getElementById("accepter");

function checkForm()
{

  if(nom.value == "")
  {
    document.getElementById("nomFaux").textContent = "Veuillez indiquer votre nom.";
  }
  else if(filtreTexte.test(nom.value) == false)
  {
    document.getElementById("nomFaux").textContent = "Seules les lettres (majuscules ou minuscules) sont autorisées.";
  }

  else
  {
    document.getElementById("nomFaux").textContent = "";
  }

  if(prenom.value == "")
  {
    document.getElementById("prenomFaux").textContent = "Veuillez indiquer votre prénom.";
  }
  else if(filtreTexte.test(prenom.value) == false)
  {
    document.getElementById("prenomFaux").textContent = "Seules les lettres majuscules ou minuscules sont autorisées";
  }

  else
  {
    document.getElementById("prenomFaux").textContent = "";
  }

  for (var genre in sexe)
  {
      if (sexe[genre].checked == false)
    {
      document.getElementById("sexeVide").textContent ="Veuillez indiquer votre sexe.";
    }

      else
    {
      document.getElementById("sexeVide").textContent = "";
    }
  }

  if(naissance.value == "")
  {
    document.getElementById("naissanceVide").textContent = "Veuillez préciser votre date de naissance.";
  }

  else
    {
      document.getElementById("naissanceVide").textContent = "";
    }

  if(codePostal.value == "")
  {
    document.getElementById("codePostalFaux").textContent = "Veuillez renseigner votre code postal";
  }

  else if(filtreCode.test(codePostal.value) == false)
  {
    document.getElementById("codePostalFaux").textContent = "Le code postal comporte nécessairement 5 chiffres.";
  }

  else
    {
      document.getElementById("codePostalFaux").textContent = "";
    }

  if (adresse.value !="")
  {
    if(filtreAlphaNum.test(adresse.value) == false)
    {
      document.getElementById("adresseFaux").textContent = "L'adresse n'admet que des caractères alphanumériques ainsi que les symboles de ponctuation suivants : , ; .";
    }

    else
    {
      document.getElementById("adresseFaux").textContent = "";
    }
  }

  if (ville.value !="")
  {
    if(filtreTexte.test(ville.value) == false)
    {
      document.getElementById("villeFaux").textContent = "Le nom de ville inclut uniquement des lettres minuscules ou majuscules.";
    }

    else
    {
      document.getElementById("villeFaux").textContent = "";
    }
  }

  if(adresseMail.value == "")
  {
    document.getElementById("emailFaux").textContent = "Veuillez saisir une adresse électronique.";
  }

  else if(filtreMail.test(adresseMail.value) == false)
  {
    document.getElementById("emailFaux").textContent = "L'adresse électronique comporte des caractères alphanumériques, un '@' et un nom de domaine.";
  }

  else
    {
      document.getElementById("emailFaux").textContent = "";
    }

  if(sujet.value == "default")
  {
    document.getElementById("sujetVide").textContent = "Veuillez sélectionner le motif de votre demande.";
  }

  else
    {
      document.getElementById("sujetVide").textContent = "";
    }

  if(question.value == "")
  {
    document.getElementById("questionFaux").textContent = "Veuillez préciser votre demande.";
  }

  else if(filtreAlphaNum.test(question.value) == false)
  {
    document.getElementById("questionFaux").textContent = "La question ne peut inclure que des caractères alphanumériques ainsi que les symboles de ponctuation suivants : , ; .";
  }

  else
    {
      document.getElementById("questionFaux").textContent = "";
    }

  if (accepter.checked == false)
  {
    document.getElementById("cocheVide").textContent = "Vous devez accepter le traitement informatique pour l\'expédition du formulaire.";
  }

  else
    {
      document.getElementById("cocheVide").textContent = "";
    }
}
  
document.getElementById("contact").addEventListener("submit", e =>
{
  e.preventDefault();
  
  checkForm();
});

document.getElementById("annuler").addEventListener("click", function(e)
{
  var confirmation = confirm ("Voulez-vous vraiment effacer le contenu du formulaire ?")

  if(confirmation == false)
  {
    e.preventDefault();
  }
});

document.getElementById("sujet").addEventListener("change", function(e)
{
  document.getElementById("question").focus();
});