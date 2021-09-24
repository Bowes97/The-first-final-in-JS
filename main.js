let edit = document.querySelector('.edit');
let info = document.querySelector('.info');
let save = document.querySelector('.save');
let style = document.querySelector('.style');
let add = document.querySelector('.add')
let set = document.querySelector('.set');
let mainContainer = document.querySelector('.container');
let secondContainer = document.querySelector('.container2');
let headerText = document.querySelector('.header');
let f2 = document.forms.f2;
let f3 = document.forms.f3;
let select = document.querySelector('.option');
let f5 = document.forms.f5;
let f6 = document.forms.f6;
let f4 = document.forms.f4;
let f7 = document.forms.f7;
let table = document.querySelector('.table')
let list = document.querySelector('.list');
let main_table = document.querySelector('.main_table')
let main_list = document.querySelector('.main_list')
let menuColor = document.querySelector('.menuColor');
let menuBackgroundColor = document.querySelector('.menuBackgroundColor');
let textArea = document.querySelector('.textInArea');
let save_box = document.querySelector('.save_box');
let create_table = document.querySelector('.create_table')
let inputTR = document.getElementById('inputTR');
let inputTD = document.getElementById('inputTD');
let widthTD = document.getElementById('widthTD');
let heightTD = document.getElementById('heightTD');
let border = document.getElementById('border');
let colorBorder = document.querySelector('.colorBorder');
let borderscope = document.querySelector('.borderscope');
let backgroundColor = document.querySelector('.background');
let colors = document.querySelector('.colors')
edit.addEventListener('click', function () {
    info.classList.add('display');
    let text = f2.text.value;
    text = headerText.innerHTML
    textArea.innerHTML = text;
    set.classList.remove('display');
})
save.addEventListener('click', function () {
    let text = f2.text.value;
    headerText.innerHTML = text;
})
add.addEventListener('click', function () {
    mainContainer.classList.add('displayNone');
    secondContainer.classList.toggle('display');
    mainContainer.classList.remove('displayFlex')
})
style.addEventListener('click', function () {
    info.classList.remove('display')
    set.classList.add('display');
})
f3.addEventListener('click', function () {
    let radio = f3.radio.value;
    let fontSize = radio + 'px';
    headerText.style.fontSize = fontSize;
})
select.addEventListener('click', function () {
    let option = select.value;
    headerText.style.fontFamily = option;
})
let check = document.querySelector('.checkbox');
check.addEventListener('click', function () {
    headerText.classList.toggle('bold')
})
let checks = document.querySelector('.checkboxSecond');
checks.addEventListener('click', function () {
    headerText.classList.toggle('italic')
})
list.addEventListener('click', function () {
    main_list.classList.add('display');
    main_table.classList.add('displayNone');
    main_list.classList.remove('displayNone');
    save_box.classList.remove('heightSaveBox')
})
let optionslist = document.querySelector('.options-list')
let count = document.querySelector('.CountLi')
let buttonList = document.querySelector('.btn-list');
buttonList.addEventListener('click', function () {
    mainContainer.classList.add('displayFlex')
    secondContainer.classList.remove('display')
    let CountLi = count.value;
    let listOPT = optionslist.value;
    let ol = document.createElement('ol');
    for (let i = 1; i <= CountLi; i++) {
        let li = document.createElement('li');
        let textOl = 'person';
        li.textContent = textOl;
        let lists = ol.appendChild(li)
        textArea.innerHTML += lists.outerHTML;
        lists.setAttribute('type', listOPT);
        console.log(lists.getAttribute('type'));
    }
})
table.addEventListener('click', function () {
    main_table.classList.add('display');
    main_list.classList.add('displayNone');
    main_table.classList.remove('displayNone');
    save_box.classList.add('heightSaveBox')
})
console.log(style);
if (info.classList.contains('dispay')) {
    document.querySelector('.style').disabled = true;
}
create_table.addEventListener('click', function () {
    mainContainer.classList.add('display');
    mainContainer.classList.remove('displayNone');
    secondContainer.classList.remove('display');
    mainContainer.classList.add('displayFlex');
    let mainTR = inputTR.value;
    let mainTD = inputTD.value;
    let textTr = '!!! ';
    let tables = '<table>';
    let widthTd = widthTD.value;
    let heightTd = heightTD.value;
    let Border = border.value;
    let ColorBorder = colorBorder.value;
    let BorderScope = borderscope.value;
    for (let i = 1; i <= mainTR; i++) {
        tables += '<tr>';
        for (let k = 1; k <= mainTD; k++) {
            tables += `<td style="width: ${widthTd}px; height: ${heightTd}px; border: ${Border}px ${BorderScope}; border-color: ${ColorBorder};">${textTr}</td>`;
        }
        tables += '</tr>';
    }
    tables += '</table>';
    textArea.innerHTML += tables
    console.log(BorderScope);
})
menuColor.addEventListener('click', function () {
    menuColor.classList.add('yellow');
    menuBackgroundColor.classList.remove('yellow')
    colors.classList.add('display');
    backgroundColor.classList.remove('display');
    document.querySelector('.red').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.blue').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.green').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.black').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.orange').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.pink').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.white').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.purple').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
    document.querySelector('.cadetblue').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.color = st.backgroundColor
    })
})
menuBackgroundColor.addEventListener('click', function () {
    menuColor.classList.remove('yellow');
    menuBackgroundColor.classList.add('yellow')
    colors.classList.remove('display');
    backgroundColor.classList.add('display');
    document.querySelector('.reds').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.blues').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.greens').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.blacks').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.oranges').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.pinks').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.whites').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.purples').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
    document.querySelector('.cadetblues').addEventListener('click', function () {
        let st = getComputedStyle(this);
        headerText.style.backgroundColor = st.backgroundColor
    })
})
