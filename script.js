const elements1 = document.querySelectorAll('.col-output');
const elements2 = document.querySelectorAll('.col-output2');
const elements3 = document.querySelectorAll('.col-output3');
const underline1 = document.getElementById('underline');
const defaultElement1 = document.getElementById('element1'); // Phần tử mặc định

const underline2 = document.getElementById('underline2');
const defaultElement2 = document.getElementById('element4')

const underline3 = document.getElementById('underline3');
const defaultElement3 = document.getElementById('element8')

const underlineFunction = document.getElementById('underline-function');
const title = document.getElementById('subTitle-function1');

const underlineFunction2 = document.getElementById('underline-function2');
const title2 = document.getElementById('subTitle-function2');

const underlineFunction3 = document.getElementById('underline-function3');
const title3 = document.getElementById('subTitle-function3');

const underlineFunction4 = document.getElementById('underline-function4');
const title4 = document.getElementById('subTitle-function4');

const underlineFunction5 = document.getElementById('underline-function5');
const title5 = document.getElementById('subTitle-function5');

const underlineFunction6 = document.getElementById('underline-function6');
const title6 = document.getElementById('subTitle-function6');



const underlineFunction7 = document.getElementById('underline-function7');
const title7 = document.getElementById('subTitle-function7');

function setLine(line,defaultElement,elements){
    function resetUnderline() {
        const elementRect = defaultElement.getBoundingClientRect();
        line.style.width = `${elementRect.width}px`;
        line.style.left = `${elementRect.left}px`;
    }
    
    resetUnderline(); // Khởi động ban đầu
    
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            const elementRect = element.getBoundingClientRect();
            line.style.width = `${elementRect.width}px`;
            line.style.left = `${elementRect.left}px`;
        });
    
        element.addEventListener('mouseleave', () => {
            resetUnderline(); // Trở lại vị trí mặc định khi rời khỏi các phần tử
        });
    });
    window.addEventListener('resize', function() {
        resetUnderline(); 
    });
}

setLine(underline1,defaultElement1,elements1);
setLine(underline2,defaultElement2,elements2);
setLine(underline3,defaultElement3,elements3);

function Underline(line,title) {
    const elementRect = title.getBoundingClientRect();
    line.style.width = `${elementRect.width}px`;
    line.style.left = `${elementRect.left}px`;
    window.addEventListener('resize', function() {
        Underline(line,title); 
    });
}
Underline(underlineFunction,title);
Underline(underlineFunction2,title2);
Underline(underlineFunction3,title3);
Underline(underlineFunction4,title4);
Underline(underlineFunction5,title5);
Underline(underlineFunction6,title6);
Underline(underlineFunction7,title7);


var menuItems = [
    { text: "Home", url: "#" },
    { text: "検査結果画面の解説", url: "#" },
    { text: "主な機能", url: "#" },
    { text: "利用シーン別ガイド", url: "#",className: 'tabMenuBread' },
    { text: "初めてご利用の方へ", url: "#" },
    { text: "FAQ", url: "#" }
];

function createBreadcrumb() {
    var breadcrumbContainer = document.getElementById("breadcrumbMenu");
    breadcrumbContainer.innerHTML = "";

    for (var i = 0; i < menuItems.length; i++) {
        var item = menuItems[i];
        var breadcrumbItem = document.createElement("a");
       breadcrumbItem.className="tabMenuBread"
        breadcrumbItem.textContent = item.text;
        breadcrumbItem.href = item.url;

        if (i < menuItems.length ) {
            var separator = document.createElement("span");
            separator.textContent = " / ";
            separator.className="arrow";
            breadcrumbContainer.appendChild(separator);
        }

        breadcrumbContainer.appendChild(breadcrumbItem);
    }
}

window.onload = createBreadcrumb;

