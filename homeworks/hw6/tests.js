import { expect, assert } from 'chai'
import { toggle, splitToLines } from '../../src/utils'
import { showMessage } from '../../src/HwInstructions'

const steps = {
	introduction: 1,
	console: 2,
	script_tag: 3,
	addition1: 4,
	addition2: 5,
	addition_check: 6,
	addition_refactor: 7,
	substract: 8,
	finish: 9

}
		
export function generateTests(hw) {
	let CONFIG = hw.config
	CONFIG.hints = 'on'
// TODO შეგვიძლია შევამოწმოთ window.url 
// და მაგის მიხედვით ჩავრთოთ ყველა ტესტი 
// CONFIG.checkAll = true
	console.log(CONFIG.isStep(steps.introduction))
	CONFIG.isStep(steps.introduction) && describe(`მინი კალკულატორი`, () => {
		CONFIG.hints = 'on'
		it(`ამ დავალების მიზანია ჯავასკრიპტის ფუნქციების და DOM-ის ვარჯიში.
			თუ სემინარის შემდეგ სავარჯიშოებს დამოუკიდებლად არ აკეთებ ან 
			სემინარებს საერთოდ არ ესწრები, დავალებას ცოტათი მეტი დრო დაჭირდება, რადგან
			ყველაფრის თავიდან გარკვევა მოგიწევს. თუმცა, მაქსიმალურად შევეცადე
			რომ მაგ შემთხვევაშიც მარტივი იყოს ინსტრუქციების მიყოლა.`)
		setPassword(CONFIG)
		window.getPassword = () => CONFIG.password
		it(`ამჯერადაც პაროლის გაგებაა საჭირო შემდეგი
		ნაბიჯისთვის. გახსენი დავალების ფოლდერი ედიტორში (თუ არ იცი, ინსტრუქცია ქვემოთაა)
		და index.html ფაილში ნახე რა უნდა გააკეთო პაროლის გასაგებად`, () => {
			const n = Number(document.querySelector('div#write-password-inside').innerText)
        	expect(n).eql(CONFIG.password)
		})
		toggle('help')
		showMessage('ედიტორის-გამოყენება', 'კონსოლის-გამოყენება')
		
	})

	

	/**
	 * ფუნქციის დაბრუნებული მნიშვნელობის გამოყენება
	 * ელემენტების შეცვლა
	 */
	CONFIG.isStep(steps.console) && describe(`კონსოლი. DOM`, () => {
		CONFIG.hints = 'on'
		it(`დავალების ზოგ ნაწილს (მაგალითად ამას) არ ვტესტავ, მაგრამ მიწერია თავად როგორ შეამოწმო.
		  შემდეგ ნაბიჯზე გადასვლის ღილაკი თავიდანვე გამწვანებულია.
			თუ იმ გვერდის დავალებების გაკეთების გარეშე გადახვალ შემდეგზე, 
			კოდის წერას ვერ გააგრძელებ. `)
		it(`თუ ხაზის დასაწყისში წერია console > , ეს ნიშნავს რომ >-ის მერე დაწერილი
			კოდი კონსოლში უნდა ჩაწერო`)

		it(`0. ჯერ სკრიპტ თეგი ჩაამატე. index.js ფაილი უკვე შევქმენი. 
			სკრიპტ თეგი აუცილებელია, რომ იყოს app div-ის შემდეგ 
			(ადგილი უკვე მონიშნულია). თეგის id იყოს my-script, `, () => {
			let scriptElem = document.getElementById(`my-script`)
			expect(scriptElem.src).include('index')
		})
		it(`<script id="my-script" src="./index.js"></script>`)
		
		it(`1. index.html-ში შენთვის უკვე შექმნილია app div 
			(შეგიძლია ნახო inspect element-ით). 
			იპოვე ეს ელემენტი DOM ჯავასკრიპტის გამოყენებით. მიიტანე მაუსი
			კონსოლში დაბრუნებულ მნიშვნელობასთან და გვერდზე მარკერი გამოჩნდება. `)
		it(`console > document.getElementById('app')`)
		it(`2. ყოველ ჯერზე რომ არ შევცვალოთ მოდი რამე ცვლადში შეინახე`)
		it(`console > let appDiv = document.getElementById('app')`)
		it(`3. ახლა ამ ცარიელ ელემენტში კალკულატორის ჩონჩხი დავამატოთ. 
			დრო რომ არ დაკარგო, უკვე დავწერეთ შესაბამისი html, რომელსაც 
			getCalculatorElement() ფუნქცია აბრუნებს. სცადე მისი გამოძახება `)
		it(`console > getCalculatorElement()`)
		it(`4. მოდი ახლა ეს ელემენტიც რაიმე ცვლადში შევინახოთ`)
		it(`console > let ourDiv = getCalculatorElement()`)
		it(`5. მხოლოდ ის დაგვრჩენია, რომ app div-ში ეს html კოდი ჩავწეროთ.`)
		it(`console > appDiv.appendChild(ourDiv)`)

		it(`თუ ყველაფერი გააკეთე, გამოიძახე ფუნქცია ILoggedEverythingToConsole() და შემდეგ ნაბიჯზე გადახვალ`)
		window.ILoggedEverythingToConsole = () => hw.nextStep()
		
	})

	CONFIG.isStep(steps.script_tag) && describe('script tag დამატება', () => {
		toggle('help')
		it(`შემდეგ ნაბიჯზე გადავედით, მაგრამ კალკულატორის ელემენტი გაქრა.
			შეგიძლია, ახსნა, რატომ?`)
		it(`ამის მიზეზი ის არის, რომ გვერდის თავიდან ჩატვირთვისას ისევ index.html
			ფაილი წაიკითხა`)
		it(`ახლა გახსენი index.js ფაილი vs code-ში და გადაიტანე ხაზი იქ. 
			გვერდის ჩატვირთვისას ბრაუზერი წაიკითხავს ფაილს და შეასრულებს იქ 
			ჩაწერილ კოდს`, () => {
			const c = document.getElementById('calculator')
			expect(c).to.exist
		})
		it(`document.getElementById('app').appendChild( getCalculatorElement() )`)
	})

	CONFIG.isStep(steps.addition1) && describe('მიმატება. ნაბიჯი 1', () => {
		it(`მშვენიერია. ახლა შეგვიძლია ფუნქციონალზე მუშაობა დავიწყოთ.
			ჯერ მიმატებაზე ვკონცენტრირდეთ. რა გვჭირდება ამ ოპერაციის იმპლემენტაციისთვის?
			`, () => {
			
		})
		splitToLines(`
			1. უნდა წავიკითხოთ ორ ველში შეყვანილი რიცხვები
			2. უნდა მივუმატოთ ერთმანეთს
			3. უნდა გამოვაჩინოთ შედეგი საიტზე 
			`)
		it(`საჭირო ფუნქციონალის გასატესთად ისევ კონსოლში გადავიდეთ და
			შემდეგ გადავიტანოთ კოდი ფაილში. ჯერ შეყვანილი რიცხვები წავიკითხოთ.
			იმ ველს, სადაც მომხმარებელი წერს, id number1 და number2 უკვე მივანიჭე.
			შეგიძლია იპოვო ისინი კონსოლით?`, () => {})
		splitToLines(`
			console > document.getElementById('number1')
			console > document.getElementById('number2')
			`)
		it(`ჩვენ მთლიანი ელემენტი არ გვჭირდება, მხოლოდ ის, რაც შიგნით წერია
			ამ მნიშვნელობისთვის ჩაწერე ვებ გვერდზე რამე მათში და
			 წაიკითხე მიღებული input ელემენტის value ატრიბუტი`, () => {})
		splitToLines(`
			console > document.getElementById('number1').value
			console > document.getElementById('number2').value
			`)
		it(`კარგი, მოდი ეს მნიშვნელობები ცვლადებში შევინახოთ და შემდეგ ერთმანეთს მივუმატოთ. 
			რას იღებ მოცემული კოდის გაშვების შემდეგ? რა პრობლემაა?`)
		splitToLines(`
			console > let a = document.getElementById('number1').value
			console > let b = document.getElementById('number2').value
			console > a + b
			`)
		it(`ტექსტის რიცხვში გადასაყვანად ჯავასკრიპტში არსებობს ფუნქცია
			Number, რომელსაც ტექსტს მიაწვდი და რიცხვად გადააქცევს. სცადე:`)
		it(`console > Number(a) + Number(b)`)
		it(`კარგი, მოდი ამ ეტაპზე პროგრესი index.jsში შევინახოთ. შექმენი ფუნქცია
			calculatorAdd და მიაბი იგი მიმატების ღილაკს. რომ გავიგოთ, 
			სწორად მუშაობს თუ არა, ფუნქციიდან უბრალოდ რამე მესიჯი გააგზავნე
			კონსოლში. გადატვირთე გვერდი, გახსენი კონსოლი, მაუსით დააჭირე + ღილაკს და ნახე მესიჯი
			კონსოლში`, () => {
				const c = document.querySelector(`button#add`).onclick
				expect(c).to.exist
			})
		splitToLines(`function calculatorAdd() {
				console.log('function works!')
			}
			document.getElementById('add').onclick = calculatorAdd
			`)
		
	})

	CONFIG.isStep(steps.addition2) && describe('მიმატების ფუნქციის შექმნა', () => {
		it(`ამ გვერდზე ფუნქციონალი არ მოწმდება. დარწმუნდი, რომ ყურადღებით წაიკითხე
			ორივე ინსტრუქცია და კოდი მთლიანად გაქვს გადატანილი`, () => {})
		it(`ახლა კოდიც გადავიტანოთ. ჯერ შედეგის
			გამოსაჩენი ნაწილი არ დაგვიწერია, ამიტომ იმისთვის, რომ დავრწმუნდეთ,
			ყველაფერი სწორად მუშაობს, ფუნქციიდან კონსოლში გავაგავნოთ მესიჯი. 
			გადატვირთე გვერდი, შეიყვანე რაღაც რიცხვები, დააჭირე ღილაკს და 
			ნახე შედეგი კონსოლში თუ გამოჩნდება`, () => {})
		splitToLines(`
			function calculatorAdd() {
				let a = document.getElementById('number1').value
				let b = document.getElementById('number2').value
				let result = Number(a) + Number(b)
				console.log(result)
			}
			`)
		it(`ახლა ბევრი აღარ არის დარჩენილი. console.log-ის მაგივრად,
			result-ის მნიშვნელობა უბრალოდ შესაბამის ელემენტში ჩაწერე. 
			გადატვირთე გვერდი, შეამოწმე რომ მუშაობს და შემდეგ გვერდზე გადასვლისას
			მეც შევამოწმებ`, () => {
			
		})
		it(`document.getElementById('result').innerText = result`)

	})

	CONFIG.isStep(steps.addition_check) && describe('', () => {
		it(`მიმატების ფუნქციის შემოწმება`, () => {
			const a = Math.round(Math.random() * 10)
			const b = Math.round(Math.random() * 10)
			document.getElementById('number1').value = a
			document.getElementById('number2').value = b
			document.getElementById('add').onclick()
			const res = document.getElementById('result').innerText
			expect(Number(res)).equal(a + b)
		})
		it(`მიმატების ღილაკის შემოწმება`, () => {
			const a = Math.round(Math.random() * 10)
			const b = Math.round(Math.random() * 10)
			document.getElementById('number1').value = a
			document.getElementById('number2').value = b
			calculatorAdd()
			const res = document.getElementById('result').innerText
			expect(Number(res)).equal(a + b)
		})
	})

	CONFIG.isStep(steps.addition_refactor) && describe('რეფაქტორინგი', () => {

		it(`🥳 არაჩვეულებრივია. სანამ გამოკლების ფუნქციაზე გადავიდოდეთ,
			პატარა რეფაქტორინგი გავაკეთოთ, რომ კოდის წერა გაგიადვილდეს.
			ამისთვის ფუნქციებისთვის არგუმენტის გადაწოდებასა და 
			შედეგის დაბრუნებას გამოვიყენებთ`, () => {})
		it(`შექმენი ფუნქცია setResult. იგი მიიღებს არგუმენტს r და
			result ელემენტის მნიშვნელობას გაუტოლებს მას`, () => {
				const a = Math.round(Math.random() * 10) 
				setResult(a)
				const res = document.getElementById('result').innerText
				expect(Number(res)).equal(a)
			})
		splitToLines(`
			function setResult(r) {
				document.getElementById('result').innerText = r
			}
			`)
		it(`გამოიძახე რამდენჯერმე სხვადასხვა რიცხვით კონსოლში,
		 რომ აღიქვა როგორ მუშაობს`, () => {})
		it(`ახლა კი calculatorAdd() ფუნქციაში ბოლო ხაზი ჩაანაცვლე setResult-ის გამოძახებით`, () => {
		 	window.resultFunctionChecker = false
		 	const oldSetResult = window.setResult
 			window.setResult = () => resultFunctionChecker = true
 			calculatorAdd()
 			expect(resultFunctionChecker).to.be.true
 			window.setResult = oldSetResult
		 })
		 splitToLines(`
		 	let result = Number(a) + Number(b)
		 	setResult(result)
		 	`)
		 it(`a და b-ს წაკითხვაც გავაუმჯობესოთ. შექმენი ფუნქცია getValue(id), რომელიც
		 	იპოვის ელემენტს id-ით და მის მნიშვნელობას დააბრუნებს`, () => {
		 		const a = Math.round(Math.random() * 10)
				const b = Math.round(Math.random() * 10)
				document.getElementById('number1').value = a
				document.getElementById('number2').value = b
				expect(Number(getValue('number1'))).equal(a)
				expect(Number(getValue('number2'))).equal(b)
		 	})
		 splitToLines(`
		 	function getValue(id) {
				return document.getElementById(id).value
			}
	 	`)
		 it(`გამოიყენე getValue() ფუნქცია: calculatorAdd() - ში (შეცვალე პირველი ორი ხაზი)`, () => {
		 	window.setValueFunctionCount = 0
		 	const oldGetValue = window.getValue
		 	window.getValue = (id) => setValueFunctionCount++
		 	calculatorAdd()
		 	expect(setValueFunctionCount).equal(2)
		 	window.getValue = oldGetValue
		 })
		 splitToLines(`
		 	let a = getValue('number1')
			let b = getValue('number2')
		 	`)
		 it(`ბოლო გაუმჯობესებაც და გამოკლების ფუნქციონალს უმარტივესად დავწერთ.
		 	მოდი getValue-დან ბარემ რიცხვი დავაბრუნოთ და სათითაოდ a და b-ს
		 	გადაკონვერტირება აღარ დაგვჭირდება.`, () => {
		 		const a = Math.round(Math.random() * 10)
				const b = Math.round(Math.random() * 10)
				document.getElementById('number1').value = a
				document.getElementById('number2').value = b
				expect(getValue('number1')).equal(a)
				expect(getValue('number2')).equal(b)
		 })
		 splitToLines(`
		 	function getValue(id) {
		 		let v = document.getElementById(id).value
		 		return Number(v)
		 	} 
		 	`)
		 it(`let result = Number(a) + Number(b) აღარაა საჭირო, შეგიძლია პირდაპირ
			მიუმატო`, () => {
				const oldNumber = window.Number
				const numberTimesCalled = 0
				const oldGetValue = window.getValue
				// getValue-მ რომ არ გამოიძახოს Number()
		 		window.getValue = (id) => {}
				window.Number = () => numberTimesCalled++
				calculatorAdd()
				expect(numberTimesCalled).equal(0)
				window.getValue = oldGetValue
				window.Number = oldNumber
				calculatorAdd()
			})
		 it(`let result = a + b`)

	})


	CONFIG.isStep(steps.substract) && describe('გამოკლება', () => {
		it(`ძააალიან მაგარია.`, () => {})
		it(`შეგიძლია calculatorSubstract() ფუნქციის დაწერა
			დამოუკიდებლად სცადო?`, () => {
			const a = Math.round(Math.random() * 10)
			const b = Math.round(Math.random() * 10)
			document.getElementById('number1').value = a
			document.getElementById('number2').value = b
			calculatorSubstract()
			const res = document.getElementById('result').innerText
			expect(Number(res)).equal(a - b)
		})

		it(`ღილაკზე მიბმა არ დაგავიწყდეს`, () => {
			const a = Math.round(Math.random() * 10)
			const b = Math.round(Math.random() * 10)
			document.getElementById('number1').value = a
			document.getElementById('number2').value = b
			document.getElementById('substract').onclick()
			const res = document.getElementById('result').innerText
			expect(Number(res)).equal(a - b)
		})
		splitToLines(`
			function calculatorSubstract() {
				let a = getValue('number1')
				let b = getValue('number2')
				let result = a - b
				setResult(result)
			}
			document.getElementById('substract').onclick = calculatorSubstract
		`)
	})

	CONFIG.isStep(steps.finish) && describe('🥳', () => {
		toggle('help')
		showMessage('დავალების-ატვირთვა')
		it(`დავალების ატვირთვის წესი იგივეა, რაც წინაზე (შეგიძლია ქვემოთ ნახო)`, () => {})
		const celebrationGif = document.createElement('img')
		celebrationGif.src = 'https://media0.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif'
		celebrationGif.height = 400
		document.getElementById('tests').insertBefore(celebrationGif, document.getElementById('help'))
	})

}

function setPassword(CONFIG) {
	let password = Math.floor(Math.random() * (999999 - 100000) + 100000)
	if (!CONFIG.password) {
        CONFIG.password = password;
        CONFIG.save();
    }
}

window.getFirstNumber = () => {
	return 
}
