//карта

/**
 * Функция создаёт карту в блоке <div>;
 * @constructor
 * @param {object}
 * opt - объект содержащий координаты расположения начальной точки карты;
 * @param {number}
 * map - обращение к элементу с id - map, и присваются координаты из переменной opt;
 * @param {object}
 * marker -  создаётся маркер по определенным координатам с названием PizzaOnHouse;
 */

function initMap(){
    let opt = {
        center: {lat: 47.222447 , lng: 39.718650 },
        zoom: 12
    }
    let map = new google.maps.Map(document.getElementById("map"), opt)

    let marker = new google.maps.Marker({
        position:{lat: 47.21493420792745, lng: 39.70495010664075 },
        map: map,
        title: "PizzaOnHouse"
    })
}


//Кнопка скролла наверх

/**
 * Создаётся функция возврата наверх страницы
 * @param {object}
 * button создаётся переменная которой присваивается значение по классу;
 *
 * на объект window навесили скролл и получаемс насколько мы прокуритили окно
 * => если больше 800 пикселей, то появляется кнопка
 * 
 * на button навешивается событие по нажатию, которое сбрасывает основное поведение скролла и возвращает на верх в течении 1сек
 */
function backToTop(){
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 800){
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    })
    button.on('click',(e) => {
        e.preventDefault();
        $('html').animate({scrollTop:0},1000);
    })  
}
backToTop();

//Модальное окно
var modal = document.getElementById('modal1');
var button = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];

button.onclick = function (){
    modal.style.display = "block"
}

span.onclick = function(){
    modal.style.display = "none"; 
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

//слайдер
var slider = 1;
showSlides(slider);

/**
 * @param {number} n 
 * Следующий слайд
 */
function nextSlides(n){
    showSlides(slider += n);
}

/**
 * @param {number} n 
 * Текущий слайд
 */
function currentSlide(n){
    showSlides(slider = n)
}

/**
 * Функция показа слайдов
 * @param {number} n 
 * 
 * i - переменная при которой происходит переход на другой слайд
 * 
 * slides - присваивается класс из html документа
 * 
 * 1й if - позволяет листать вправо, чтобы контент повторялся
 * 2й if - позволяет листать влево, чтобы контент повторялся
 * 
 * цикл for задействует кнопки, которые показывают следующий слайд и убирают предыдущий
 */
function showSlides(n){
    var i=0;
    var slides = document.getElementsByClassName("slides-img");

    if (n > slides.length){
        slider = 1
    }
    if (n < 1){
        slider = slides.length
    }
    for (; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slider-1].style.display = "block";
}

//якорные ссылки

const yaks = document.querySelectorAll('a[href*="#"]')

for (let yak of yaks){
    yak.addEventListener("click", 
    
    /**
     * Функция перехода по странице
     * @param {object} e 
     * Сбрасывается обычное поведение страницы 
     * =>
     * Константа blockID - это переменная yak с накинутым на него атрибутом href
     * =>
     * По всей html странице находится пустая строка к которой прибавляется переменная blockID
     * =>
     * Применяется метод, который принимает объект
     */
    function(e){
        e.preventDefault();
        const blockID = yak.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",  //Плавный прокрут
        })
    })
}

//обратная связь

/**
 * Функция обратной связи
 * @param {object} =>
 * Данная функция проверяет правильность заполненной информации в полях ввода
 * =>
 * Если информация не коректная, то выдается ошибка
 * @return {boolean}
 */
function mes_go () {
    let form = document.forms.mess;
    let noMail= form.m_to.value.indexOf("@");
    if (noMail == -1) {
    alert("Введите корректный адрес электронной почты");
    return false;
    }
    
    let fio=form.nmsp.value;
    if (fio == "") {
    alert("Напишите корректное ФИО");
    return false;
    }
    
    let tel=form.tel.value ;
    if (tel == "") {
    alert("Введите номер")
    return false;
    }
    
    let strana1 = form.strana.value;
    if (strana1 == "") {
    alert ("Напишите страну");
    return false;
    }
    
    let textarea = form.let.value;
    if (textarea == "") {
    alert("Напишите комментарий");
    return false;
    }
    }

    //счетчики

const btns=document.querySelectorAll('.counter__btn');

btns.forEach(btn => {
    btn.addEventListener('click',
    
    /**
     * Данная функция увеличивает или уменьшает число в input
     * Для каждый из кнопки задается функция в которой на каждой кнопке 
     * =>
     * накидывается событие нажатия =>
     * 
     * direction - направление (+ или -) 
     * 
     * inp - место где обновляются данные
     * 
     * currentValue - текущее значение input, которое переводится в число
     * 
     * if - если нажимается plus то newValue увеличивает текущее значение на 1
     * 
     * else - если значение больше 0, то currentValue уменьшается или же пишется 0
     */
    function(){
        const inp = this.parentElement.querySelector('.counter__value');
        const direction = this.dataset.direction;
        const currentValue = +inp.value;
        
        let newValue;

        if(direction === 'plus'){
            newValue = currentValue + 1;
        } else{
            newValue = currentValue - 1 > 0 ?
            currentValue - 1 : 0;
        }
        inp.value = newValue;
    })
})

//Заказ

/**
 * Функция которая выдает сообщение о заказе
 */
function zakaz(){
    alert("Ваш заказ обрабатывается. Ждите информацию с номера доставки")
}

//Канвас

let data = [100, 68, 20, 30, 100];
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

c.fillStyle = "white";
c.fillRect(0,0,500,500);

let colors = ['#FFA07A', "#FF7F50","#FF6347","#F4A460","#D2691E"];
//вычисляем сумму всех данных
let total = 0;
    for(let i=0;i<data.length;i++){
        total += data[i];
    }
//рисуем круговые данные
let prevAngle =0;
    for(i=0;i<data.length;i++){
//доля,представленная сегментом
        let fraction=data[i]/total;
        //вычисляем начальный угол
        let angle = prevAngle+fraction*Math.PI*2;
        //рисуем сегмент
        c.fillStyle=colors[i];
        //создаем контур
        c.beginPath();
        c.moveTo(250,250);
        c.arc(250,250,100, prevAngle,angle,false);
        c.lineTo(250,250);
        //заливаем его
        c.fill();
        //обводим
        c.strokeStyle = "black";
        c.stroke();
        //обновляем для следующей итерации цикла
        prevAngle = angle;
}
//тест по центру
c.fillStyle = "black";
c.font="24pt sans-serif";
let text = "Заказы";
let metrics=c.measureText(text);
c.fillText(text,250-metrics.width/2,400);