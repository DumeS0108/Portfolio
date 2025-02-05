function ScrollToElement(elementSelector, instance =0){
   // Sélectionne tous les éléments qui correspondent au selector donné
   const elements = document.querySelectorAll(elementSelector);
    //Vérifier s'il existe des éléments correspondant au selector et si instance demandée existe
    if(elements.length > instance){
        //Défilement vers l'instance spécifiée de l'élément
        elements[instance].scrollIntoView({behavior: "smooth"});
    }
}

const link1= document.getElementById('link1');
const link2= document.getElementById('link2');
const link3= document.getElementById('link3');

link1.addEventListener('click', () =>{
    ScrollToElement('.header');
});

link2.addEventListener('click', () =>{
    //Faites défiler jusqu'au deuxième élément avec la class « header » (en-tête)
    ScrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    ScrollToElement('.header');
});