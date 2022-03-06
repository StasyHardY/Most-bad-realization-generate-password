const btn = document.querySelector('button')
const typeGen = document.querySelector('.gen')
let numberEl = document.querySelector('.test')
const copyBtn = document.querySelector('.hidden')

let currentValue = 0



btn.addEventListener('click', function () {


let result = {
	
	 b: document.getElementById("demo").innerHTML = getRandWord()   + getRandomIntFromRange(0, 50) + getRandSymb() + getRandWord()+ getRandWordUpper() + getRandomIntFromRange(0, 50)+ getRandWordUpper() + getRandSymb() + getRandWord() +  getRandomIntFromRange(0, 200) + getRandWordUpper() + getRandomIntFromRange(0, 20) + getRandSymb() + getRandomIntFromRange(5, 500),}


currentValue++

if (currentValue >= 0){
	copyBtn.classList.add('hidden')
	console.log('none')

} 


if (currentValue >= 1){
	copyBtn.classList.remove('hidden')
	console.log('here')

} 
console.log(currentValue)

typeGen.innerHTML = 'Генерация пароля' + ' '+  `<span> стандартная </span>`

			if (currentValue > 5)
			{

				b: document.getElementById("demo").innerHTML =   getRandWord()  +  getRandWordUpper()  +getRandWord() +  getRandWordUpper() + getRandWord() + getRandWordUpper() + getRandWord()  +  getRandWordUpper()  +getRandWord() +  getRandWordUpper() + getRandWord() + getRandWordUpper() + getRandWordUpper() + getRandWord() + getRandWordUpper()
				console.log('Сейчас изменилась генерация пароля на буквы')
				typeGen.innerHTML = 'Генерация пароля' + ' ' +  `<span> буквенная </span>`
				}



			if ( currentValue > 10)  {

				 b: document.getElementById("demo").innerHTML = getRandomIntFromRange(0, 100) + '' +  getRandomIntFromRange(0, 100) + getRandomIntFromRange(0, 100) + '' +  getRandomIntFromRange(0, 100) + getRandomIntFromRange(0, 100) + '' +  getRandomIntFromRange(0, 100) + getRandomIntFromRange(0, 100) + '' +  getRandomIntFromRange(0, 100) +  getRandomIntFromRange(0, 100) + '' +  getRandomIntFromRange(0, 100) + getRandomIntFromRange(0, 100) + '' +  getRandomIntFromRange(0, 100) 

				console.log('Сейчас изменилась генерация пароля на числа')
				typeGen.innerHTML = 'Генерация пароля' + ' '+ `<span> Числовая </span>`
				}





			if ( currentValue > 15)  {

				 b: document.getElementById("demo").innerHTML = getRandSymb() + getRandSymb() + getRandSymb() + getRandSymb()  + getRandSymb() + getRandSymb() + getRandSymb() + getRandSymb() + getRandSymb() + getRandSymb()
				console.log('Сейчас изменилась генерация пароля на Символы')
				typeGen.innerHTML = 'Генерация пароля' + ' '+ `<span> Символьная </span>`
				}




			if ( currentValue > 20) {

				currentValue = 0
				typeGen.innerHTML = 'Генерация пароля' + ' '+  `<span> стандартная </span>`
				console.log('Сейчас изменилась генерация изменилась на стандартную')
				}




	genRaandom()



})

function genRaandom() {




	 getRandWord()
	 getRandomIntFromRange()
	 getRandSymb()
	  
}





function getRandomIntFromRange(min, max) {
  min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
  max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
  return Math.floor(Math.random() * (max - min)) + min; 
}




function getRandWordUpper() {
	const wordUp = 'QWERTYUIOASDFGHJKLZXCVBNM'
	return wordUp [Math.floor(Math.random() * wordUp .length)]
}


function getRandWord() {
	const word = 'qwertyuioplkjhgfdsazxcvbnm'
	return word[Math.floor(Math.random() * word.length)]
}



function getRandSymb() {
	const symbols = '!"№;%:?*,./&!@#$$;%:?*()'
	return symbols [Math.floor(Math.random() * symbols.length)]
}



