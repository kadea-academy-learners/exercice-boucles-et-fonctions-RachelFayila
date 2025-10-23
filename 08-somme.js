/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
  if (typeof n !== "number" || n < 0)
  {
   return 0; 
  }
  let somme = 0;
  for (let i = 1; i <= n ; i++)
  {
    somme += i;
  }
  return somme;
}
console.log(somme (8));

// Ne pas modifier la ligne ci-dessous
module.exports = { somme }
