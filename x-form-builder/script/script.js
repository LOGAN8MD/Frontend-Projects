let boxs = document.querySelectorAll('.Img_div');
let textdrop = document.querySelector('.documents');
let box = document.querySelector('.textDrop_div');




let obj1 = new Forms();


function dragstart(event, id) {
  ///////////This is for image
  if (id === 'logo') {
    boxs.forEach(e => {
      e.style.border = '5px solid red';
      e.style.borderStyle = 'dashed';
    })
  }

  ///This is for text box
  else if (id === 'textdiv') {
    textdrop.style.border = '5px solid red';
    textdrop.style.borderStyle = 'dashed';
  }
}


function dragend(event, id) {
  event.preventDefault();
  
  if (id === 'logo') {       ///////////This is for image
    boxs.forEach(e => {
      e.style.border = '2px solid grey';
      e.style.borderStyle = 'dashed';
    })
  }

  else if (id === 'textdiv') {   ///This is for text box
    textdrop.style.border = '2px solid grey';
    textdrop.style.borderStyle = 'dashed';
  }
}


function dragover(event) {
  event.preventDefault();
}


function want() {
  let a = Math.floor(Math.random() * 100);
  return a;
}


function drop(event, id, dropId) {  //////////////////////////////// Drop function Start here///////////////////////

  if (dropId === 'logo') { ////////////////This is for header and footer image drop

    event.preventDefault();

    let input = document.createElement("input");
    input.type = "file";
    let inputId = 'id' + want();
    input.setAttribute('id', inputId);


    let img = document.createElement("img");
    img.src = '';
    let imgId = 'img' + want();
    img.setAttribute('id', imgId);
    img.setAttribute('width', '100%');
    img.style.display = 'none';

    input.addEventListener('change', (e) => {
      let inputId = e.target.id
      preview(e, inputId, imgId, id)
    })

    event.target.appendChild(input);
    event.target.appendChild(img);

  }

  // else if (dropId === 'textdiv') {   /////////////////////This is for textbox drop

  //   let boxDiv = 'boxDiv' + want();
  //   const textBox = document.createElement('div');
  //   textBox.id = boxDiv;
  //   textBox.style.backgroundColor = 'lightgray';
  //   textBox.style.marginTop = '2%';
  //   textBox.style.width = '70%';
  //   textBox.style.marginLeft = '15%';
  //   textBox.style.borderRadius = '6px';


  //   const childDiv = document.createElement("div");
  //   childDiv.style.width = '100%';
  //   childDiv.style.display = 'flex';

  //   let h4 = 'h4' + want();
  //   const title = document.createElement('h4');
  //   title.id = h4;
  //   title.innerText = "Input here";
  //   title.style.marginLeft = '5%';
  //   title.style.paddingTop = '9px';
  //   title.style.paddingBottom = '9px';

  //   const edit = document.createElement('button');
  //   edit.innerHTML = 'Edit';
  //   edit.style.marginLeft = '30%';
  //   edit.style.backgroundColor = '#1aa6e8';
  //   edit.style.border = ' none';
  //   edit.style.width = '15%';
  //   edit.style.borderRadius = '8px';
  //   edit.style.cursor = 'pointer';

  //   const remove = document.createElement('button');
  //   remove.innerHTML = 'Remove';
  //   remove.style.marginLeft = '3%';
  //   remove.style.backgroundColor = '#ff5722';
  //   remove.style.border = ' none';
  //   remove.style.width = '20%';
  //   remove.style.borderRadius = '8px';
  //   remove.style.cursor = 'pointer';

  //   remove.addEventListener('click', () => {
  //     textBox.style.display = 'none';
  //   })

  //   let inputId = 'input' + want();
  //   const input = document.createElement("input");
  //   input.type = "text";
  //   input.setAttribute('id', inputId);
  //   input.placeholder = "placeholder";
  //   input.style.marginLeft = '6%';
  //   input.style.marginTop = '5%';
  //   input.style.marginBottom = '5%';
  //   input.style.width = '80%';
  //   input.style.height = '2rem';


  //   edit.addEventListener('click', () => {
  //     let container2 = document.querySelector('.container2');

  //     let popUp_Id = 'boxDiv' + want();
  //     let popUp_div = document.createElement('div');
  //     popUp_div.setAttribute('id', popUp_Id);
  //     popUp_div.setAttribute('class', 'edit_popup');


  //     let h1 = document.createElement('h1');
  //     h1.setAttribute('class', 'popup_h1');
  //     h1.innerText = 'Edit input File';

  //     let Id1 = 'inputId' + want();
  //     let input1 = document.createElement('input');
  //     input1.setAttribute('class', 'input_popup');
  //     input1.setAttribute('id', Id1);
  //     input1.placeholder = 'Name';

  //     let label1 = document.createElement('label');
  //     label1.innerText = 'Placeholder';
  //     label1.setAttribute('class', 'p_popup');

  //     let Id2 = 'placeholderId' + want();
  //     let input2 = document.createElement('input');
  //     input2.setAttribute('class', 'input_popup');
  //     input2.setAttribute('id', Id2);
  //     input2.placeholder = 'Name';

  //     let label2 = document.createElement('label');
  //     label2.innerText = 'Input type';
  //     label2.setAttribute('class', 'p_popup');

  //     let select_Id = 'select_Id' + want();
  //     let select1 = document.createElement('select');
  //     select1.setAttribute('id', select_Id);
  //     select1.setAttribute('class', 'input_popup');

  //     let option1 = document.createElement('option');
  //     option1.value = 'text';
  //     option1.innerText = 'Text';

  //     let option2 = document.createElement('option');
  //     option2.value = 'radio';
  //     option2.innerText = 'Radio';

  //     let option3 = document.createElement('option');
  //     option3.value = 'checkbox';
  //     option3.innerText = 'CheckBox';

  //     let label3 = document.createElement('label');
  //     label3.innerText = 'Input Required';
  //     label3.setAttribute('class', 'p_popup');

  //     let select2 = document.createElement('select');
  //     select2.setAttribute('class', 'input_popup');

  //     let option4 = document.createElement('option');
  //     option4.value = 'Yes';
  //     option4.innerText = 'Yes';

  //     let option5 = document.createElement('option');
  //     option5.value = 'No';
  //     option5.innerText = 'No';

  //     let btn1 = document.createElement('button');
  //     btn1.innerText = 'Save changes';
  //     btn1.setAttribute('class', 'btn_popup_s');


  //     let btn2 = document.createElement('button');
  //     btn2.innerText = 'Close';
  //     btn2.setAttribute('class', 'btn_popup_c')
  //     btn2.setAttribute('onclick', 'close_popup()')

  //     container2.appendChild(popUp_div);
  //     popUp_div.appendChild(h1);
  //     popUp_div.appendChild(input1);
  //     popUp_div.appendChild(label1);
  //     popUp_div.appendChild(input2);
  //     popUp_div.appendChild(label2);
  //     popUp_div.appendChild(select1);
  //     select1.appendChild(option1);
  //     select1.appendChild(option2);
  //     select1.appendChild(option3);
  //     popUp_div.appendChild(label3);
  //     popUp_div.appendChild(select2);
  //     select2.appendChild(option4);
  //     select2.appendChild(option5);
  //     popUp_div.appendChild(btn1);
  //     popUp_div.appendChild(btn2);

  //     let popup = document.getElementById(popUp_Id);
  //     popup.style.display = 'block';

  //     btn1.addEventListener('click', () => {
  //       save_popup(popUp_Id, h4, inputId, Id1, Id2, select_Id);
  //     })

  //     btn2.addEventListener('click', () => {
  //       close_popup(popUp_Id);
  //     })

  //   })

  //   textBox.appendChild(childDiv);
  //   childDiv.appendChild(title);
  //   childDiv.appendChild(edit);
  //   childDiv.appendChild(remove);
  //   textBox.appendChild(input);
  //   box.appendChild(textBox);

  // }
 


}  ///////////////////////// dropImg function End here

box.addEventListener('drop',(e)=>{

 
    let boxDiv = 'boxDiv' + want();
    const textBox = document.createElement('div');
    textBox.id = boxDiv;
    textBox.style.backgroundColor = 'lightgray';
    textBox.style.marginTop = '2%';
    textBox.style.width = '70%';
    textBox.style.marginLeft = '15%';
    textBox.style.borderRadius = '6px';


    const childDiv = document.createElement("div");
    childDiv.style.width = '100%';
    childDiv.style.display = 'flex';

    let h4 = 'h4' + want();
    const title = document.createElement('h4');
    title.id = h4;
    title.innerText = "Input here";
    title.style.marginLeft = '5%';
    title.style.paddingTop = '9px';
    title.style.paddingBottom = '9px';

    const edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.style.marginLeft = '30%';
    edit.style.backgroundColor = '#1aa6e8';
    edit.style.border = ' none';
    edit.style.width = '15%';
    edit.style.borderRadius = '8px';
    edit.style.cursor = 'pointer';

    const remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.style.marginLeft = '3%';
    remove.style.backgroundColor = '#ff5722';
    remove.style.border = ' none';
    remove.style.width = '20%';
    remove.style.borderRadius = '8px';
    remove.style.cursor = 'pointer';

    remove.addEventListener('click', () => {
      textBox.style.display = 'none';
    })

    let inputId = 'input' + want();
    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute('id', inputId);
    input.placeholder = "placeholder";
    input.style.marginLeft = '6%';
    input.style.marginTop = '5%';
    input.style.marginBottom = '5%';
    input.style.width = '80%';
    input.style.height = '2rem';


    edit.addEventListener('click', () => {
      let container2 = document.querySelector('.container2');

      let popUp_Id = 'boxDiv' + want();
      let popUp_div = document.createElement('div');
      popUp_div.setAttribute('id', popUp_Id);
      popUp_div.setAttribute('class', 'edit_popup');


      let h1 = document.createElement('h1');
      h1.setAttribute('class', 'popup_h1');
      h1.innerText = 'Edit input File';

      let Id1 = 'inputId' + want();
      let input1 = document.createElement('input');
      input1.setAttribute('class', 'input_popup');
      input1.setAttribute('id', Id1);
      input1.placeholder = 'Name';

      let label1 = document.createElement('label');
      label1.innerText = 'Placeholder';
      label1.setAttribute('class', 'p_popup');

      let Id2 = 'placeholderId' + want();
      let input2 = document.createElement('input');
      input2.setAttribute('class', 'input_popup');
      input2.setAttribute('id', Id2);
      input2.placeholder = 'Name';

      let label2 = document.createElement('label');
      label2.innerText = 'Input type';
      label2.setAttribute('class', 'p_popup');

      let select_Id = 'select_Id' + want();
      let select1 = document.createElement('select');
      select1.setAttribute('id', select_Id);
      select1.setAttribute('class', 'input_popup');

      let option1 = document.createElement('option');
      option1.value = 'text';
      option1.innerText = 'Text';

      let option2 = document.createElement('option');
      option2.value = 'radio';
      option2.innerText = 'Radio';

      let option3 = document.createElement('option');
      option3.value = 'checkbox';
      option3.innerText = 'CheckBox';

      let label3 = document.createElement('label');
      label3.innerText = 'Input Required';
      label3.setAttribute('class', 'p_popup');

      let select2 = document.createElement('select');
      select2.setAttribute('class', 'input_popup');

      let option4 = document.createElement('option');
      option4.value = 'Yes';
      option4.innerText = 'Yes';

      let option5 = document.createElement('option');
      option5.value = 'No';
      option5.innerText = 'No';

      let btn1 = document.createElement('button');
      btn1.innerText = 'Save changes';
      btn1.setAttribute('class', 'btn_popup_s');


      let btn2 = document.createElement('button');
      btn2.innerText = 'Close';
      btn2.setAttribute('class', 'btn_popup_c')
      btn2.setAttribute('onclick', 'close_popup()')

      container2.appendChild(popUp_div);
      popUp_div.appendChild(h1);
      popUp_div.appendChild(input1);
      popUp_div.appendChild(label1);
      popUp_div.appendChild(input2);
      popUp_div.appendChild(label2);
      popUp_div.appendChild(select1);
      select1.appendChild(option1);
      select1.appendChild(option2);
      select1.appendChild(option3);
      popUp_div.appendChild(label3);
      popUp_div.appendChild(select2);
      select2.appendChild(option4);
      select2.appendChild(option5);
      popUp_div.appendChild(btn1);
      popUp_div.appendChild(btn2);

      let popup = document.getElementById(popUp_Id);
      popup.style.display = 'block';

      btn1.addEventListener('click', () => {
        save_popup(popUp_Id, h4, inputId, Id1, Id2, select_Id);
      })

      btn2.addEventListener('click', () => {
        close_popup(popUp_Id);
      })

    })

    textBox.appendChild(childDiv);
    childDiv.appendChild(title);
    childDiv.appendChild(edit);
    childDiv.appendChild(remove);
    textBox.appendChild(input);
    e.target.appendChild(textBox);

  

})


let popUp_placeholder = document.getElementById('placeholder');

function save_popup(popUp_Id, h4, inputId, Id1, Id2, select_Id) {

  let title = document.getElementById(h4);
  let text_box_input = document.getElementById(inputId);
  let popup_input_1 = document.getElementById(Id1);
  let popup_input_2 = document.getElementById(Id2);
  title.innerText = popup_input_1.value;
  text_box_input.placeholder = popup_input_2.value;

  let select = document.getElementById(select_Id);
  text_box_input.type = select.value;

  let popUp_div = document.getElementById(popUp_Id);
  popUp_div.style.display = 'none';

 
  let close = document.querySelector('.edit_popup');
  close.style.display = 'none';

}


function close_popup(a) {
  let close = document.getElementById(a);
  close.style.display = 'none';

}




///////////////////////////////////////////////////Previewing Image//////


function preview(event, inputId, imgId, divId) {
  let input = document.getElementById(inputId);
  input.style.display = 'none';

  let imgC = document.getElementById(imgId);


  imgC.src = URL.createObjectURL(event.target.files[0]);

console.log( imgC.src)

const encodedData = btoa(imgC.src)

console.log(encodedData)

  imgC.style.display = 'block';

  if (divId === 'header_Img_1' || divId === 'header_Img_2' || divId === 'header_Img_3') {
  
    obj1.setHeader(new ImgObj(divId, encodedData))
  }

  else if (divId === 'footer_Img_1' || divId === 'footer_Img_2' || divId === 'footer_Img_3') {
   
    obj1.setFooter(new ImgObj(divId, encodedData))

  }

}

/////////////////////////////////////////////////// End Previewing Image ////////////////
 
//////////////////////Banner Img

function change(event, id) {
  let main = document.querySelector('.main');

  for (let i = 0; i < 2; i++) {
    main.children[i].style.display = 'none';
  }

  let bannnerimg = document.createElement("img");
  let imgId = 'img' + want();
  bannnerimg.setAttribute('id', imgId);
  bannnerimg.src = URL.createObjectURL(event.target.files[0]);;
  bannnerimg.setAttribute('height', '100%');
  bannnerimg.setAttribute('width', '100%');
  main.appendChild(bannnerimg);
  
  obj1.setBanner(new ImgObj(id,bannnerimg.src))
}
  

//////////////////////////////////Pushing Text Boxs////////////////////////
function register_Boxes() {
  for (let Dropbox of  box.children) {
    let boxs = Dropbox.children;
    let input = boxs[1];

    obj1.setForm(new FormObj(input.type,boxs[0].children[0].innerText,input.placeholder))

  }
}
////////////////////////////////// End Pushing Text Box////////////////////////



function storeData() {
  let Data=obj1.getData()
  console.log(Data);
  localStorage.setItem('Data', JSON.stringify(Data));
}

function cancel(){
for (let Dropbox of box.children) {
  Dropbox.style.display='none';
 }
}


