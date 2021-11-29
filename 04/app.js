console.log('DOM');

// I sposób

const navSection = document.querySelector('nav');
const newUlSection = document.createElement('ul');

const urlArray = ['/', '/gallery', '/contact'];
const textArray = ['start','galeria','kontakt'];

if(navSection){
    navSection.appendChild(newUlSection);

    for(let i=0; i<urlArray.length; i++){
        const newLiSection = document.createElement('li');
        const newASection = document.createElement('a');
        newASection.innerHTML = textArray[i];
        newASection.setAttribute('href',urlArray[i]);
        newUlSection.appendChild(newLiSection).appendChild(newASection);
    }
}




// const AList = document.querySelectorAll('a');
// AList.forEach(function(element,index){
//     element.setAttribute('href',urlArray[index]);
//     element.innerHTML = textArray[index];
// });

// console.log(AList);

//Komentarz dla mnie:
//Istnieje take metoda values() zwraca nowy obiekt Array Item , który zawiera wartości dla każdego indeksu w tablicy.

// const urlArray = ['/', '/gallery', '/contact'];
// const itemUrlArray = urlArray.values(); 

// const textArray = ['start','galeria','kontakt'];
// const itemTextArray = textArray.values();





