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

  let myForm = document.forms['dynForm'];

  
    for (let i = 0; i < formDef1.length; i++) {
      if((f[i].kind == "longtext") || (f[i].kind == "number") || (f[i].kind == "shorttext")){
        let div1 = document.createElement('div');
        let label1 = document.createElement('label');
        let text1 = document.createTextNode(f[i].label);
        let input1 = document.createElement('input');
        input1.type = f[i].kind;
        input1.name = f[i].name;
        label1.appendChild(text1);
        label1.appendChild(input1);
        div1.appendChild(label1);
        myForm.appendChild(div1);
      }
    }
  


}

dynForm(formDef1);