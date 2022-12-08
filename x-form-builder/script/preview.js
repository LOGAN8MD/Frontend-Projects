
let k=localStorage.getItem('Data');

  let Data=JSON.parse(k);
  // console.log(Data);
  // let displayImg=Data. Header[0].Url;

// console.log();


// for(i=0;i<Data. Header.length;i++){
//   divId=Data. Header[i].imgId;
  
//   if(divId==='header_Img_1'){
//     displayImg=Data. Header[i].Url;
//     let setImg=document.querySelector('.Img1');
//     setImg.src=displayImg;
//     setImg.style. visibility='visible';
//   }
//  else if(divId==='header_Img_2'){
//     displayImg=Data. Header[i].Url;
//     // console.log(displayImg);
//     let setImg=document.querySelector('.Img2');
//     setImg.src=displayImg;
//     setImg.style. visibility='visible';
//   }
//   else if(divId==='header_Img_3'){
//     displayImg=Data. Header[i].Url;
//     let setImg=document.querySelector('.Img3');
//     setImg.src=displayImg;
//     setImg.style. visibility='visible';
//   }
//   else if(divId==='footer_Img_1'){
//     displayImg=Data. Header[i].Url;
//     let setImg=document.querySelector('.Img4');
//     setImg.src=displayImg;
//     setImg.style. visibility='visible';
//   }
//   else if(divId==='footer_Img_2'){
//     displayImg=Data. Header[i].Url;
//     let setImg=document.querySelector('.Img5');
//     setImg.src=displayImg;
//     setImg.style. visibility='visible';
//   }
//   else if(divId==='footer_Img_3'){
//     displayImg=Data. Header[i].Url;
//     let setImg=document.querySelector('.Img6');
//     setImg.src=displayImg;
//     setImg.style. visibility='visible';
//   }
  
  
// };
 
//  console.log(picture);
//  picture.children[0].src=displayImg;

let formObj= new XForm(Data);

let headers=formObj. getHeader();
console.log(headers)

let form=formObj.getForm();
console.log(form)

let banner=formObj. getBanner();
console.log(banner)

let footers=formObj.getFooter();
console.log(footers)

headers.forEach(imgData=>{
  setHeader(imgData);
})

footers.forEach(imgData=>{
  setFooter(imgData);
})



form.forEach(box => {
  if(box.type==='text'){
    setText(box);
  }
 else if(box.type==='checkbox'){
  setCheck(box);
  }
  else if(box.type==='radio'){
    setRadio(box);
  }
})


setBanner(banner);
