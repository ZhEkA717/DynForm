"use strict";

var formDef1 =
  [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
    {
      label: 'Рубрика каталога:', kind: 'combo', name: 'division',
      variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
    },
    {
      label: 'Размещение:', kind: 'radio', name: 'payment',
      variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
    },
    { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { label: 'Опубликовать:', kind: 'submit' },
  ];

var formDef2 =
  [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { label: 'Зарегистрироваться:', kind: 'submit' },
  ];

function dynForm(f) {

  let myForm = document.createElement('form')
  myForm.method='post';

  for (let i = 0; i < f.length; i++) {

    if (f[i].kind == "longtext" || f[i].kind == "number" || f[i].kind == "shorttext") {
      let div = document.createElement('div');
      let label = document.createElement('label');
      let text = document.createTextNode(f[i].label);
      let input = document.createElement('input');
      input.type = f[i].kind;
      input.name = f[i].name;
      input.id = "addstyle";
      label.appendChild(text);
      label.appendChild(input);
      div.appendChild(label);
      myForm.appendChild(div);
    }

    if (f[i].kind == 'combo') {
      let div = document.createElement('div');
      let label = document.createElement('label');
      let text = document.createTextNode(f[i].label);
      let select = document.createElement('select')
      select.kind = f[i].kind;
      select.name = f[i].name;
      for (let k = 0; k < f[i].variants.length; k++) {
        let option = document.createElement('option');
        let optionText = document.createTextNode(f[i].variants[k].text);
        option.value = f[i].variants[k].value;
        if (option.value == "3") {
          option.selected = true;
        }
        option.appendChild(optionText);
        select.appendChild(option);
      }
      label.appendChild(text);
      label.appendChild(select);
      div.appendChild(label);
      myForm.appendChild(div);
    }

    if (f[i].kind == "radio") {
      console.log('sdfsdf');
      let div = document.createElement('div');
      let label = document.createElement('label');
      let text = document.createTextNode(f[i].label);
      label.appendChild(text);
      let span = document.createElement('span');
      for (let k = 0; k < f[i].variants.length; k++) {
        let input = document.createElement('input');
        input.type = f[i].kind;
        input.name = f[i].name;
        input.value = f[i].variants[k].value;
        input.style.marginRight = 10 + 'px';
        if (input.value == 2) {
          input.checked = true;
        }
        let inputText = document.createTextNode(f[i].variants[k].text);
        span.appendChild(input);
        span.appendChild(inputText);
      }
      label.appendChild(span);
      div.appendChild(label);
      myForm.appendChild(div);
    }

    if (f[i].kind == 'check') {
      let div = document.createElement('div');
      let label = document.createElement('label');
      let text = document.createTextNode(f[i].label);
      let input = document.createElement('input');
      input.type = f[i].kind + 'box';
      input.name = f[i].votes;
      input.checked = true;
      input.id = "inputCheck"
      label.appendChild(text);
      label.appendChild(input);
      div.appendChild(label);
      myForm.appendChild(div);
    }

    if (f[i].kind == 'memo') {
      let div = document.createElement('div');
      let label = document.createElement('label');
      let text = document.createTextNode(f[i].label);
      let div1 = document.createElement('div');
      let textarea = document.createElement('textarea');
      textarea.name = f[i].name;
      label.appendChild(text);
      div1.appendChild(textarea)
      label.appendChild(div1);
      div.appendChild(label);
      myForm.appendChild(div);
    }

    if(f[i].kind == 'submit'){
      let div = document.createElement('div');
      let input = document.createElement('input');
      input.type = f[i].kind;
      input.value = f[i].label;
      div.appendChild(input);
      myForm.appendChild(div);

    }
    
  }
  let footer = document.createElement('div');
  let otstup = document.createElement('br');
  footer.appendChild(otstup);
  myForm.appendChild(footer);
  document.body.appendChild(myForm);
}


