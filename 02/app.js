console.log('DOM');

const mainElement = document.querySelectorAll('[data-url]');
console.log(mainElement);

if(mainElement){
mainElement.forEach(function(element){
    const url = element.getAttribute('data-url')
    console.log(url);
        if(url !== null){
            element.setAttribute('href', url)
        }
})
}


// const aList = document.querySelectorAll('a');

// if(aList){
//     aList.forEach(function(element){
//         const array = [];
//             if(element.innerText !== null){
//                 if(element.hasAttribute('data-url')){
//                     array.push(element.getAttribute('data-url'));
//                 }
//                 if(element){
//                     element.setAttribute('href',array);
//                 }
//             }
//         });
// }
// console.log(aList);