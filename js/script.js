// Ciclo 'for' stampa numeri
for (let i = 1; i <=100; i++) {
console.log(i);

// Funzione per stampare Fizz Buzz o FizzBuzz

// Stampa Fizz se multipli di 3
if (i % 3 === 0) {  
    console.log('Fizz');

// Stampa Buzz se multipli di 5
} else if (i % 5 === 0) {
    console.log('Buzz');

// Stampa FizzBuzz se multipli di 3 e 5
} else if (i % 3 === 0 && i % 5 === 0) {  
    console.log('FizzBuzz');
} else {
    console.log(i);
}

// Inizializzo costante per container e ciclo for stamp DOM
const containerHtml = document.querySelector('.container-boxes');

// Ciclo for DOM
for (let i = 1; i <=100; i++)

    // Stampa Fizz nel DOM se multiplo di 3
    if (i % 3 === 0) {  
    containerHtml.innerHTML += `<div class="box box-fizz">Fizz</div>`;

    // Stampa Buzz nel DOM se multiplo di 5
    } else if (i % 5 === 0) {  
        containerHtml.innerHTML += `<div class="box box-buzz">Buzz</div>`;

    // Stampa FizzBuzz se multiplo di 3 e 5
    }else if (i % 3 === 0 && i % 5 === 0) {  
            containerHtml.innerHTML += `<div class="box box-fizzbuzz">FizzBuzz</div>`
    
    // Stampa nel DOM la successione dei numeri
    } else {
        containerHtml.innerHTML += `<div class="box">${i}</div>`; 
    }
}