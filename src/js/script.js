// Here I declare the btn variables since I am going to use the other variables within the button event.
// To bring them from HTML it has to be by ID
const btn = document.getElementById('btn'); 
const error = document.getElementById('error');

btn.addEventListener('click', function() {
    const name = document.getElementById('name').value.trim(); //trim to remove whitespace and prevent them from placing only spaces
    const age = Number(document.getElementById('age').value.trim()); // Here I convert an age into a numeric variable
    const resultado=document.getElementById("resultado")
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //valid that only allows entering letters
    // si nombre y edad estan vacios imprime mensage
    if (name === '' ||  age === '') {
        error.textContent = '❌ Please complete all fields.';
        resultado.textContent = '';
        return;
    }
    // If name is different from the variable sololetra which contains all the letters, it means that you are entering an invalid character for a name.
    if (!soloLetras.test(name)) {
        error.textContent = '❌ The name must only contain letters.';
        resultado.textContent = '';
        return;
    } else {
        error.textContent = '';
    }

    if (age <= 0) {
        resultado.textContent = '❌ Invalid age.';
    } else if (age < 18) {
        resultado.textContent = `${name}, ❌ You are a minor, continue enjoying the code.`;
    } else {
        resultado.textContent = `${name}, ✔️ You are of legal age, you can now work with us.`;
    }
});
