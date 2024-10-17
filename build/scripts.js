/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */
console.log('hello')
//------------------------------------------------------------------------------
// Fastar
// @ts-check
/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/*
* Fallið skilar lengsta orðinu í streng. Ef enginn strengur þá skila núll
*@param {string} str Strengur sem á að finna lengsta orðið í
*@returns {string | null} Lengsta orðið eða null
*/

function longest(str) {
  if (isString(str)) {
    const ord = split(str);
    let lengsta = ord[0];
    for (let i of ord) {
      if (i.length > ord[0].length) {
        lengsta = i;
      }
    }
    return lengsta;
  }
  return null;
}

console.assert(longest('Pepperoni pizzur eru góðar')=== 'Pepperoni', 'longest: Skilar lengsta orðinu í setningu')
console.assert(longest('')=== '', 'longest: skilar tómum streng ef engin strengur er')
console.assert(longest()=== null, 'longest: Skilar null ef ekkert orð er')
console.assert(longest('Hundur Köttur')=== 'Hundur', 'longest: Ef nokkur orð eru jafn löng þá skilar fyrsta langa orðinu')

/*
* Fallið skilar stysta orðinu í streng. Ef enginn strengur þá skila núll
*@param {string} str Strengur sem á að finna stysta orðið í
*@returns {string | null} Stysta orðið eða null
*/

function shortest(str) {
  if (isString(str)) {
    const ord = split(str);

    let stysta = ord[0];

    for (let i of ord) {
      if (i.length < ord[0].length) {
        stysta = i;
      }
    }
    return stysta;
  }

  return null;
  
}

console.assert(shortest('Bleiki dagurinn nálgast')=== 'Bleiki', 'shortest: Skilar stysta orðinu');
console.assert(shortest('')=== '', 'shortest: Skilar tómum streng ef strengur er tómur');
console.assert(shortest()=== null, 'shortest: Skilar null ef ekkert orð'); 
console.assert(shortest('Hundur Köttur') === 'Hundur', 'shortest: Skilar fyrsta orðinu ef  mörg eru jafnlöng');

/*
* Fallið skilar lengsta öfugum streng. Ef enginn strengur þá skila núll
*@param {string} str Strengur sem á að snúa við
*@returns {string | null} Öfugur strengur eða null
*/

function reverse(str) {
  if (isString(str)){
  const split =  str.split('');
  const reversed = split.reverse()
  console.log(split)

  return reversed.join('')
  }
  return null;
}

console.assert(reverse('hæ') === 'æh', 'reverse: snýr við streng')
console.assert(reverse(false) === null, 'reverse: ef ekki strengur þá skila null')

/*
* Athugar hvort að strengur sé samhverfur eða ekki
*@param {string} str Strengur sem á að athuga hvort sé samhverfur eða ekki
*@returns {boolean} Skilar true ef strengurinn er samhverfur annars false 
*/

function palindrome(str) {
  const rev = reverse(str);
  if (isString(str)) {
    if (str === ''){
      return false;
    }
    if (rev === str) {
    return true;
    }
  }
  return false;

}

console.assert(palindrome('madam') === true, 'palindrome: skilar true ef strengur er palindrome');
console.assert(palindrome('Forseti') === false, 'palindrome: skilar false ef strengur er ekki palindrome');
console.assert(palindrome('')=== false, 'palindrome: skilar false ef strengur er tómur');
console.assert(palindrome(null) === false, 'palindrome: ef inntakið er ekki strengur, skila þá null');

/*
* Fallið skilar fjölda sérhljóða í streng, ef enginn sérhljóði í streng skila 0
*@param {string} str Strengur sem á að telja sérhljóða í
*@returns {number} Fjöldi sérhljóða eða 0
*/

function vowels(str) {
  if(!isString(str)){
    return 0;
  }
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(VOWELS.includes(str[i])){
      count++;
    }
  }
  return count; 
}

console.assert(vowels('Morgunblaðið') === 4, 'vowels: Skilar 4 ef strengur hefur 4 sérhljóða osfrv' );
console.assert(vowels('shhhh') === 0, 'vowels: Skilar 0 ef stregnur hefur enga sérhljóða')
console.assert(vowels(null) === 0, 'vowels: Ef engin strengur þá skila 0')

/*
* Fallið skilar fjölda samhljóða í streng, ef enginn samhljóði í streng skila 0
*@param {string} str Strengur sem á að telja samhljóða í
*@returns {number} Fjöldi samhljóða eða 0
*/

function consonants(str) {
  if(!isString(str)) {
    return 0;
  }
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(CONSONANTS.includes(str[i])){
      count++;
    }
  }
  return count;
}

console.assert(consonants('strengths') === 8, 'consonants: Skilar 8 ef að strengur hefur 8 samhljóða osfrv')
console.assert(consonants('æææ') === 0, ' consonants: Skilar 0 ef strengur hefur núll samhljóða')
console.assert(consonants(null) === 0, 'consonants: Ef ekki strengur þá skila 0')

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Leiðbeint ferli, veldu ok og sláðu svo inn annað hvort orð eða setningu ');
  const input = prompt('Sláðu inn orð eða setningu sem þú vilt tékka á');

  if (isString(input) === false) {
    console.info('Hætt við eða tómur strengur')
    return;
  }

  const lo = longest(input);
  const sh = shortest(input);
  const re = reverse(input);
  const vo = vowels(input);
  const co = consonants(input);
  const pa = palindrome(input);

  const results = `
Lengsta orðið: ${lo}
Stysta orðið: ${sh}
Öfugur strengur: ${re}
Fjöldi sérhljóða: ${vo}
Fjöldi samhljóða: ${co}
Er samhverfur: ${pa ? 'Já' : 'Nei'}
`;

    alert(results);
    const tryAgain = confirm("Viltu reyna aftur?")

    if (tryAgain) {
      start();
    }
}
