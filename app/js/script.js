const headerBtn = document.querySelector('.header__btn')
const headerText = document.querySelector('.header__text')

function count() {
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            headerText.innerHTML += '*_'
        }
        headerText.innerHTML += '<br>'
    }
}
headerBtn.addEventListener('click', count)
const functionBtn = document.querySelector('.function')

function calculateNum(a, b) {
    functionBtn.addEventListener('click', () => {
        headerText.innerHTML = a * b
        return a * b
    })
}
const whileCircle = document.querySelector('.while')
calculateNum(5, 5)
let i = 26
while (i > 0) {
    i--
    headerText.innerHTML += `${i}_`
}
const DOM1btn = document.querySelector('.dom1')
const DOM2btn = document.querySelector('.dom2')
const DOM3btn = document.querySelector('.dom3')
const block1 = document.querySelector('.header__block1')
const block2 = document.querySelector('.header__block2')
const block3 = document.querySelector('.header__block3')
DOM1btn.addEventListener('click', () => {
    block1.style.width = '200px'
})
DOM2btn.addEventListener('click', () => {
    block2.style.backgroundColor = 'red'
})

function removeColor() {
    if (block3.classList.contains('orange')) {
        block3.classList.remove('orange')
    }
}
DOM3btn.addEventListener('click', removeColor)
const array1Btn = document.querySelector('.array1')
const arrayText = document.querySelector('.array1__text')
const array1 = ['andrew', 34, true, 'stavropol', ]

function showArray() {
    for (let i = 0; i < array1.length; i++) {
        arrayText.innerHTML += array1[i] + ' '
    }
}
array1Btn.addEventListener('click', showArray)
const array2 = ['andrew', 34, true, 'stavropol', false, 'undefined']
const array2Value = array2.length
const array3 = [33, 'best', 66, 'best']
const array3Btn = document.querySelector('.array3')
const arrayInput = document.querySelector('.array3__text')
const array4Btn = document.querySelector('.array4')
const out1 = document.querySelector('.out1')
const array4 = ['andrew', 34, true, 'stavropol', false, 'undefined']

function getArray4() {
    for (let i = 0; i < array4.length; i++) {
        out1.innerHTML += array4[i] + '_'
    }
}
array4Btn.addEventListener('click', getArray4)
// const array5 = ['andrew', 34, true, 'stavropol', false, 'undefined']
// for (let i = 0; i < array5.length; i++) {
//     console.log(array5.length);
// }
d1 = [33, 'best', 66, 'best'];
const inputBtn = document.querySelector('.input1')
const out2 = document.querySelector('.out2')

function getInputValue() {
    const inputValue1 = document.querySelector('.inputvalue1').value
    d1.push(inputValue1)
    for (let i = 0; i < d1.length; i++) {
        out2.innerHTML += d1[i]
    }
}
inputBtn.addEventListener('click', getInputValue)


const inputBtn2 = document.querySelector('.input2')
const out3 = document.querySelector('.out3')

function getInputValue3() {
    d1.pop()
    for (let i = 0; i < d1.length; i++) {
        out3.innerHTML += d1[i]
    }
}
inputBtn2.addEventListener('click', getInputValue3)
// shift  ?????????????? ???????????? ?????????????? ???? ?????????????? ?? ???????????????????? ?????? ????????????????
//?????????? unshift() ?????????????????? ???????? ?????? ?????????? ?????????????????? ?? ???????????? ?????????????? ?? ???????????????????? ?????????? ?????????? ??????????????.
const a1 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
]
// for (let i = 0; i < a1.length; i++) {
//     let c = a1[i]
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }
let outNum = ' '
const getDef = document.querySelector('.arr58')

function get58() {

    for (let i = 0; i < a1.length; i++) {
        for (let k = 0; k < a1[i].length; k++) {
            // console.log();
            if (a1[i][k] > 57 && a1[i][k] < 59) {
                outNum += a1[i][k] + ''
            }

        }
        document.querySelector('.out4').innerHTML = outNum
    }
}
getDef.addEventListener('click', get58)

let a1Object = {
    "one": 15,
    "two": 16,
    "five": 20
};
let outObj = ' '
const outObjectOut = document.querySelector('.outObject1')
const outObject1Btn = document.querySelector('.outObject1Btn')

function getObj() {
    for (let key in a1Object) {
        // outObj += a1Object[key] + '_' //???????????????? ????????????????
        outObj += key + ' ' + a1Object[key] + '_' + '<br>' //???????????????? ???????? ?? ????????????????
        // delete ?????????????? ???????? ?? ????????????????
    }
    outObjectOut.innerHTML = outObj
}
outObject1Btn.addEventListener('click', getObj)


const ID = 'dd976322bb8a170251ecb9740f102888'
let selectBtn = document.querySelector('.get__weather')
selectBtn.addEventListener('change', () => {
    let selectValue = selectBtn.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${selectValue}&appid=${ID}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('.weather__country').textContent = data.name
            document.querySelector('.weather__degree').innerHTML = Math.round(data.main.temp - 273) + '&#176'
            document.querySelector('.weather__clouds').innerHTML = data.wind.speed
            document.querySelector('.weather__img').innerHTML = data.weather[0].main
        });
})

let a = new Set()
a.add(5)
a.add('andrew')
a.add('surname')
let outSet = ' '
let inputSet = document.querySelector('.inputset')
const setBtn = document.querySelector('.setBtn')

function setObj() {
    outSet += inputSet.value
    a.add(outSet)
}
setBtn.addEventListener('click', setObj)

let b = [1, 10, 98]
let circleOut = ' '
const circleBtn = document.querySelector('.circle')

function getCircle() {
    for (let i = 0; i < b.length; i++) {
        console.log(b[i]);
        circleOut += 'index' + [i] + ' ' + 'value' + b[i] + ' '
    }
    document.querySelector('.outCircle').innerHTML += circleOut
}
circleBtn.addEventListener('click', getCircle)

let d3 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
let c3 = d3.map((item) => {
    return item * 2
})

let d4 = [2, 3, 4, 5, 10, 11, 12]
let c4 = d4.map((item, index) => {
    return Math.pow(item, 2)
})
let d5 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11]
let c5 = d5.filter((item, index) => {
    if (typeof (item) === 'number') {
        return true
    }
})

let d6 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
let d7 = [2, "hello", 3, "hi", 4, "Mazai"]
let c6 = []
let c8 = []
d6.forEach(elem => {
    c6.push(elem)
})
// let c7 = c6.map((item) => {
//     return item * 2
// })
let c7 = c6.filter((item) => {
    if (item % 2 == 0) {
        return true
    }
})
d7.forEach(elem => {
    c8.push(elem)
})
let c9 = c8.filter((item) => {
    if (typeof (item) === 'number') {
        return true
    }
})
const clickMy = document.querySelector('.clickme')
const clickOut1 = document.querySelector('.clickout1')

function clickMe() {
    clickOut1.textContent = 'Hello'
}
clickMy.addEventListener('click', (e) => {
    if (e.altKey == false) {
        console.log('Press ME');
    } else {
        console.log('Hello');
    }
})
const expandSquare = document.querySelector('.clickExpand')
const expandMeBtn = document.querySelector('.expandme')
let w = 300
let d = 200
expandMeBtn.addEventListener('click', (e) => {
    expandSquare.style.width = w + 'px'
    w += 100
})
const keyCheck = document.querySelector('.buttonCheck')
const checkBtn = document.querySelector('.checkBtn')
keyCheck.addEventListener('keypress', (e) => {
    console.log(e.keyCode);
    checkBtn.textContent = e.code
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        console.log("You pressed number");
    } else {
        console.log("you pressed symbol");
    }
})
const storageBtn = document.querySelector('.checkStorage')
const outStorage = document.querySelector('.outstorage')
const getStorage = document.querySelector('.getStorage')

function checkStorage() {
    const a = 11
    const b = [2, 7, 3]
    const c = [13, 5, 27, 53, 8]
    localStorage.setItem('5', a)
    localStorage.setItem('arr', b)
    localStorage.setItem('arr2', JSON.stringify(c))
}

function getStorageInfo() {
    let d = localStorage.getItem('arr2')
    d = JSON.parse(d)
    for (let i = 0; i < d.length; i++) {
        outStorage.innerHTML += i + ' ' + d[i] + '<br>'
    }
}
storageBtn.addEventListener('click', checkStorage)
getStorage.addEventListener('click', getStorageInfo)
const methodOut = document.querySelector('.classMethod')
class Goods {
    constructor(block, name, amount, image, count) {
        this.block = block
        this.name = name
        this.amount = amount
        this.image = image
        this.count = count
    }
    draw() {
        this.block.innerHTML = `${this.name} ${this.amount} ${this.image} ${this.count}`
    }
}
let goods = new Goods(methodOut, 'Andrew', '15', '<span class="material-icons">face</span>', 'total 50').draw()

function getRandomInt() {
    const outStorage = document.querySelector('.outstorage')
    const min = 117
    const max = 237
    outStorage.innerHTML = Math.floor(Math.random() * (max - min)) + min;

    function getTextValue() {
        return document.querySelector('.outstorage3').textContent = 'hello 2021'
    }
    getTextValue()
}
// document.querySelector('.randombtn').addEventListener('click', getRandomInt)
// getRandomInt('.outstorage2', 238, 837)
function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    document.querySelector('.out-1').textContent = Math.floor(Math.random() * (max - min + 1)) + min;
}
///?????????????????? ?????????????? ?????? ???????? ?????????? ???????????????? ?????????????????? ?????????????? ?????? ?????????????? (??????????)
document.querySelector('.random').addEventListener('click', function () {
    getRandomNum(100, 200)
})

function getSelector(min, max, selector) {
    min = Math.ceil(min)
    max = Math.floor(max)
    document.querySelector(selector).textContent = Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.random2').addEventListener('click', function () {
    getSelector(100, 200, '.out-2')
})

function getSum(a, b) {
    return a + b
}
const s = getSum(4, 5)

function getMore(c, d) {
    return Math.max(c, d)
}
let r2 = getMore(10, 40)
const box = document.querySelector('.checkbox1')

function getCheckboxValue() {
    if (box.checked) {
        return box.value
    } else {
        return false
    }
}
box.addEventListener('change', function () {
    console.log(getCheckboxValue());
})
const arrowBtn = document.querySelector('.arrow')
const arrowOut = document.querySelector('.arrowout')
// arrowBtn.addEventListener('click', function() {
//     arrowOut.innerHTML = 'hello'
// })
arrowBtn.addEventListener('click', () => {
    arrowOut.innerHTML = 'arrow function'
})
const arr1 = [5, 2, 3, 7, 4, 9]
const outArray = document.querySelector('.outarray')

function multiplyElements(num) {
    outArray.innerHTML += num ** 2 + '_'
}
const arr2 = arr1.map(multiplyElements)
const arOut = document.querySelector('.outar')
const arr3 = [9, 5, 15, 2, 4, 58]
const arr4 = arr3.map(item => item ** 2)

function getArr4() {
    for (let i = 0; i < arr4.length; i++) {
        console.log(arr4[i]);
    }
}
getArr4()
const arr5 = [5, 2, 'hello', 7, 'andrew', 9]

function getNum(num) {
    if (typeof (num) === 'number') {
        return true
    } else {
        return false
    }
}
const arr6 = arr5.filter(getNum)
console.log(arr6);

function t1() {
    console.log(this);
}
t1.call(document.querySelector('.call'))


const f1 = function () {
    console.log(this);
}
document.querySelector('.anonimous').addEventListener('click', function () {
    f1.call(document.querySelector('.call2'))
})

function maxNum(min, max) {
    this.innerHTML = min + max
}
maxNum.call(document.querySelector('.call3'), 5, 8)
const pureBtn = document.querySelector('.pure')
const pureOut = document.querySelector('.outpure')

function pureNum(min, max) {
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    pureOut.innerHTML = sum
}
pureBtn.addEventListener('click', () => {
    pureNum(5, 18)
})

function findMax(min, max) {
    let c = Math.max(min, max)
    return c
}
console.log(findMax(20, 15))
const divideBtn = document.querySelector('.divide')
const divideOut = document.querySelector('.divideout')

function getDivide(a, b, c) {
    let d = a / b
    if (d === 0) {
        console.log(c);
    } else {
        console.log(d);
    }
}
divideBtn.addEventListener('click', () => {
    getDivide(6, 3, 'im equal to zero')
})
const outRecursion = document.querySelector('.recursion')
let n = 0

function recursion() {
    n++
    if (n === 100) return
    if (n % 2 === 0) {
        outRecursion.innerHTML += n + ' '
    }
    recursion()
}
recursion()

function getRandomInt(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min)) + min
    return randomNum
}
let s1 = 0

function randomRecursion() {
    let m = getRandomInt(0, 100)
    s1 += m
    console.log(s1);
    if (m === 100) return
    if (m % 2 === 0) {
        randomRecursion()
    }
}
randomRecursion()

function anonFunc() {
    let b = 300
    const anonBtn = document.querySelector('.anonbtn')
    const anonOut = document.querySelector('.anon')
    return function () {
        anonBtn.addEventListener('click', function () {
            b++
            console.log(b);
            anonOut.style.width = b + 'px'
        })
    }
}
let anon1 = anonFunc()
anon1()

function anonFunc2() {
    let w = 500
    let h = 500
    const anonBtn = document.querySelector('.anonbtn2')
    const anonBtn2 = document.querySelector('.anonbtn22')
    const anonOut = document.querySelector('.anon2')
    return function () {
        function changeWidth() {
            anonBtn.addEventListener('click', function () {
                anonOut.style.width = w + 'px'
            })
        }
        changeWidth()

        function changeHeight() {
            anonBtn2.addEventListener('click', function () {
                anonOut.style.height = h + 'px'
            })
        }
        changeHeight()
    }
}
let anon2 = anonFunc2()
anon2()

function increaseAnon() {
    let count = 0
    return function () {
        count++
        console.log(count);
    }
}
let forwardAnon = increaseAnon()
forwardAnon()
forwardAnon()
// import Swiper from 'swiper'
// import Swiper, { Navigation, Autoplay} from 'swiper';
// Swiper.use([Navigation, Autoplay]);
// let mySwipe;
// window.addEventListener('resize', () => {
//     let myWidth = window.innerWidth
//     if (myWidth < 780) {
//     mySwipe = new Swiper('.swiper', {
//     slidesPerView: 2,
//     spaceBetween: 20,
//     });

//     } else {
//         mySwipe = new Swiper('.swiper', {
//             destroy: true,
//             });
//     }
// })
// const slides = document.querySelectorAll('.slider')
// window.addEventListener('resize', () => {
//     let myWidth = window.innerWidth
//     if (myWidth < 780) {
//         $('.slick').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,
//         });

//     } else {
//         $('.slick').slick({
//             responsive: [{
//                 breakpoint: 780,
//                 settings: "unslick"
//             }]
//         });
//     }
// })
// const outIndex = document.querySelector('.index1')
// const indexBtn = document.querySelector('.index')
// const indexMassive = [3, 5, 10, 5, 12]
// function getIndex() {
//     const indexInputText = document.querySelector('.indexinput').value
//     if (indexInputText.indexOf(5) !== -1) {
//         outIndex.innerHTML = indexInputText.indexOf(5)
//     }
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index1')
// const indexBtn = document.querySelector('.index')
// const indexMassive = [3, 7, 10, 5, 12]
// function getIndex() {
//     const indexInputText = document.querySelector('.indexinput').value
//     for (let i = 0; i < indexInputText.length; i++) {
//         if (indexInputText[i] == indexMassive.indexOf(5)) {
//             console.log('all right');
//         } else {
//             console.log('try again');
//         }
//     }
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// const indexMassive = [3, 7, 10, 5, 12]
// function getIndex() {
//     const indexInputText = document.querySelector('.indexinput2').value
//     if (indexInputText.includes(3)) {
//         console.log('?????? ????????????????????');
//     } else {
//         console.log('???????????????????? ?????? ??????');
//     }

// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// const indexMassive = [3, 7, 10, 5, 12]
// function getIndex() {
//     const indexInputText = document.querySelector('.indexinput2').value
//     if (indexInputText.includes(7) === indexMassive.includes(7)) {
//         console.log('?????? ????????????????????');
//     } else {
//         console.log('???????????????????? ?????? ??????');
//     }

// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// function getIndex() {
//     // parseInt for input to get number
//     const indexMassive = [3, 7, 10, 5, 12]
//     let indexInputText = parseInt(document.querySelector('.indexinput2').value)
//     indexMassive.push(indexInputText)
//     indexInputText = Math.pow(indexInputText, 3)
//     indexMassive.push(indexInputText)
//     console.log(indexMassive);

// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// function getIndex() {
//     // parseInt for input to get number
//     const indexMassive = [3, 7, 10, 5, 12]
//     indexMassive.pop()
//     console.log(indexMassive);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// function getIndex() {
//     let indexInputText = parseInt(document.querySelector('.indexinput2').value)
//     const indexMassive = [3, 7, 10, 5, 12]
//     indexMassive.unshift(indexInputText)
//     indexInputText = Math.pow(indexInputText, 3)
//     indexMassive.unshift(indexInputText)
//     console.log(indexMassive);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//     // ???????????????? ?????????? ??????????
//      const result = indexMassive.filter(item => {
//         return item % 2 == 0

//     })
//     console.log(result);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//     // ???????????????? ?????????? ??????????
//      const result = indexMassive.filter((item, index) => {
//         if (index % 2 == 0) {
//             return item
//         }
//     })
//     console.log(result);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//      const result = indexMassive.filter((item, index) => {
//         if (index > 4) {
//             return item
//         }
//     })
//     console.log(result);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//     console.log(Array.isArray(indexMassive));
//     let mySet = new Set();
//     mySet.add(3)
//     mySet.add(7)
//     mySet.add(10)
//     mySet.add('set')
//     let obj = {
//         name: 'Boris',
//         age: 37
//     }
//     mySet.add(obj)
//     console.log(mySet);
//     console.log(Array.isArray(mySet));
//     //?????????????? Set ?????????????????? ?????? ?????????????????? ???????????????????? ???????????????? ???????????? ????????, ?????? ??????????????????, ?????? ?? ???????????? ???????? ????????????????.
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//     let b = indexMassive.reduce((accum, item) => {
//         accum = accum + item
//         // accum = accum + ' ' + item ???????????????????? ?? ????????????
//         return accum
//     })
//     console.log('========================');
//     console.log(b);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//     let b = indexMassive.reduce((accum, item) => {
//         accum = accum + item
//         return accum
//     }, 13)
//     //  ?? ???????? ?????????? ???????????????? ??????????????????????
//     console.log('========================');
//     console.log(b);
// }
// indexBtn.addEventListener('click', getIndex)
// const outIndex = document.querySelector('.index2')
// const indexBtn = document.querySelector('.index2Btn')
// let indexInputText = parseInt(document.querySelector('.indexinput2').value)
// function getIndex() {
//     const indexMassive = [3, 7, 10, 5, 12, 14, 6]
//     let b = indexMassive.reduce((accum, item) => {
//         if (item > accum) {
//             accum = item
//         }
//         return accum
//     })
//     //  ???????????????? ???????????????????? ??????????
//     console.log('========================');
//     console.log(b);
// }
// indexBtn.addEventListener('click', getIndex)
// let arrData = [
//     {'id': 75, 'city': 'Moscow'},
//     {'id': 135, 'city': 'Peter'},
//     {'id': 48, 'city': 'Ekat'}
// ]
// let getReduce = arrData.reduce((accum, item) => {
//     //return item.id ?????????????? ???????????? ?????????????????? ????????
//     accum.push(item.id)
//     return accum
//     // ???????????? ?? ??????????????
// }, [])
// console.log(getReduce);
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
// const a = [2, 4, 6, 8, 10]
// const b = [1, 3, 5, 7, 9]
// const c = a.concat(b).join(" ")
// outConcat.innerHTML += c + ' '
// const d = 'Andrew' + ' '
// const e = 'Moscow'
// const f = d.concat(e)
// outConcat.innerHTML += f + ' '
// const g = a.concat(d)
// outConcat.innerHTML += g
// }
// concatBtn.addEventListener('click', getConcat)
// ?????????? slice() ???????????????????? ?????????? ????????????, ???????????????????? ?????????? ?????????? ?????????????????? ??????????????. arr.slice([begin[, end]])
//?????????? splice() ???????????????? ???????????????????? ??????????????, ???????????? ???????????????????????? ???????????????? ??/?????? ???????????????? ??????????. array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [13, 15, 22, 23, 26, 35, 72];
//     let b = a1.find(item => {
//         if (item > 23 && item < 27) {
//             return true
//         }
//     })
//     console.log(b);
// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [55, 50, 33, 45, 26, 96, 12];
//     let b = a1.find(item => {
//         if (item > 50 && item < 56) {
//             return true
//         }
//     })
//     console.log(b);
// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a10 = [55, 50, 33, 45, 26, 96, 12];
//     let result = []
//     a10.filter(item => {
//         if (item > 10 && item < 50) {
//             result.push(item)
//         }
//     })
//     let b = result.findIndex(item => {
//         if (item === 33) {
//             return true
//         }
//     })
//     outConcat.innerHTML = b
// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [22, 33, 44, 55, 66, 77, 88];
//     let a2 = a1.reverse()
//     outConcat.innerHTML = a2.join(" ")

// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let s2 = 'mazahackercrackall';
//     let a2 = s2.split("")
//     let a3 = a2.reverse().join(" ")
//     outConcat.innerHTML = a3

// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [
//             {'id': 75, 'city': 'Moscow'},
//             {'id': 135, 'city': 'Peter'},
//             {'id': 48, 'city': 'Ekat'}
//         ]
//         let a2 = a1.reverse()
//         console.log(a2);

// }
// concatBtn.addEventListener('click', getConcat)
//split and join ???????????????? ???????????? ???????????????? ????????????????????
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [13, 15, 22, 23, 26, 35, 72];
//     let a2 = a1.join()
//     outConcat.innerHTML = a2()

// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [13, 15, 22, 23, 26, 35, 72];
//     let a2 = a1.join(" ")
//     outConcat.innerHTML = a2

// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [13, 15, 22, 23, 26, 35, 72];
//     let a2 = a1.join("=")
//     outConcat.innerHTML = a2

// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [22, 33, 44, 55, 66, 77, 88];
//     let a2 = a1.every(item => {
//         if (item > 7 && item < 100) {
//             return true
//         }
//     })
//     outConcat.innerHTML = a2
// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [22, 33, 44, 55, 66, 77, 88];
//     let a2 = a1.every(item => {
//         if (item < 7) {
//             return true
//         }
//     })
//     outConcat.innerHTML = a2
// }
// concatBtn.addEventListener('click', getConcat)
// const concatBtn = document.querySelector('.concat')
// const outConcat = document.querySelector('.outconcat')
// function getConcat() {
//     let a1 = [22, 33, 44, 55, 66, 77, 88];
//     let a2 = []
//     let a3 = a1.reduce((accum, item) => {
//         return accum + item
//     })
//     a2.push(a3)
//     let a4 = a2.every(item => {
//         if (item > 20) {
//             return true
//         }
//     })
//     outConcat.innerHTML = a4
// }
// concatBtn.addEventListener('click', getConcat)
// ?????????? flat() ???????????????????? ?????????? ????????????, ?? ?????????????? ?????? ???????????????? ?????????????????? ?????????????????????? ???????? ???????????????????? "??????????????" ???? ?????????????????? ?????????????? depth. ???????????????? ???????????????? ?????????????? ??????????????????????
//?????????? fill() ?????????????????? ?????? ???????????????? ?????????????? ???? ???????????????????? ???? ?????????????????? ???????????????? ?????????? ??????????????????. arr.fill(value[, start = 0[, end = this.length]]) ???????????????? ???????????????? ????????????
//?????????? Object.keys() ???????????????????? ???????????? ???? ?????????????????????? ?????????????????????????? ?????????????? ?????????????????????? ??????????????, ?? ?????? ???? ??????????????, ?? ?????????????? ?????? ???? ???????????????????? ???????????? for...in (?????????????? ?????????? ???????????? ?? ?????????????? ?? ??????, ?????? ???????? ?????????????????????? ???????????????? ?? ???? ?????????????? ????????????????????). ???????????????? ?????????? ?????????????? ?? ??????????????, ?????????? ???????????????? ???????????????????? ??????????????????????
const concatBtn = document.querySelector('.concat')
const outConcat = document.querySelector('.outconcat')
function getConcat() {
    let a1 = [13, [4, 5], 22, [6, 7], [26, 35, 72]];
    let result = a1.flat()
    // for (let i = 0; i < result.length; i++) {
    //     outConcat.innerHTML += result[i] + ' '
    //     //???????????? ?????????? ????????????
    // }
    result.forEach(item => {
        outConcat.innerHTML += item + ' '
    })
}
concatBtn.addEventListener('click', getConcat)