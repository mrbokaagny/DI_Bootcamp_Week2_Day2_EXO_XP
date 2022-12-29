// EXO 1 : Simple If/Else Statement

console.log('----------------- EXO 1 --------------------------')

let x = 5 
let y = 8
console.log('---- la valeur de chacune de mes variables -------')
console.log(`la valeur de x est ${x}`)
console.log(`la valeur de y est ${y}`)
console.log('--------------------------------------------------')

console.log('------- resultat de la comparaison ---------------')
x > y ? console.log('x is the biggest number') : console.log('y is the biggest number')
console.log('--------------------------------------------------')


// EXO 2 : Chihuahua


console.log('----------------- EXO 2 --------------------------')
let newDog = "Chihuahua"
console.log('------ le contenu de notre variable newDog est ---')
console.log(`le contenu est : ${newDog}`)
console.log('--------------------------------------------------')

console.log('--------- le nombre de lettre dans newDog est ----')
console.log(`${newDog.length}`)
console.log('--------------------------------------------------')

console.log('-Affiche de la variable newDog est majuscule -----')
console.log(newDog.toUpperCase())
console.log('-Affiche de la variable newDog est minuscule -----')
console.log(newDog.toLowerCase())

console.log('---- Comparaison de newDog à Chihuahua')
newDog === 'Chihuahua' ? console.log('I love Chihuahuas, it’s my favorite dog breed') : console.log('I dont care, I prefer cats')


// EXO 3 : Even Or Odd
console.log('----------------- EXO 3 --------------------------')

let varPrompt = prompt('Entrer un nombre' , 5)
varPrompt = parseInt(varPrompt)

let resteOperation = varPrompt % 2

console.log(`le reste de la division de ${varPrompt} pas est : ${resteOperation} `)

varPrompt == 0 ? console.log(`${varPrompt} est un nombre pair`) : console.log(`${varPrompt} est un nombre impair`)


// EXO 4 : Group Chat
console.log('----------------- EXO 4 --------------------------')

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log('---- Le contenu de notre variable users ----------')
console.log(users)
console.log('--------------------------------------------------')

let size_users = users.length

switch (size_users) {
    case 0:
        console.log('no one is online')
        break;
    case 1 :
        console.log(`${users[0]} is online`)
        break;
    case 2 :
        console.log(`${users[0]} and ${users[1]} are online`)
        break;
    default:
        console.log(`${users[0]}, ${users[1]} and ${size_users - 2} more are online`)
        break;
}
