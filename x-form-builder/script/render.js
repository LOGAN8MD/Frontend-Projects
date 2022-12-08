

function setText(box){
    
    let textType=document.querySelector('.textType');
    let h4=document.createElement('h4');
    h4.innerText=box.title;

    let input=document.createElement('input');
    input.type=box.type;
    input.placeholder=box.placeholder;
      
    textType.append(h4);
    textType.append(input);
    
    let form=document.querySelector(".form");
    form.style.display='block';
}

function setRadio(box){
    let typeRadio=document.querySelector('.typeRadio');
    let input=document.createElement('input');
    input.type=box.type;
    input.placeholder=box.placeholder;

    let h4=document.createElement('h4');
    h4.innerText=box.title;
    
    typeRadio.append(input);
    typeRadio.append(h4);

    let form=document.querySelector(".form");
    form.style.display='block';
}

function setCheck(box){
    let typecheckbox=document.querySelector('.typecheckbox');
    let input=document.createElement('input');
    input.type=box.type;
    input.placeholder=box.placeholder;

    let h4=document.createElement('h4');
    h4.innerText=box.title;

    typecheckbox.append(input);
    typecheckbox.append(h4);

    let form=document.querySelector(".form");
    form.style.display='block';

}

 
function setHeader(imgData){

    const decodedData = atob(imgData.Url)
   console.log(imgData.Url)
   console.log(decodedData)
if(imgData.imgId==='header_Img_1'){
    let header=document.querySelector(".Img1");
    let img=document.createElement('img');
    img.src=decodedData;
    img.setAttribute('class','image')
    header.style.visibility='visible';
    header.append(img)
}
else if(imgData.imgId==='header_Img_2'){
    let header=document.querySelector(".Img2");
    let img=document.createElement('img');
    img.src=decodedData;
    img.setAttribute('class','image')
    header.style.visibility='visible';
    header.append(img)
}
else if(imgData.imgId==='header_Img_3'){
    let header=document.querySelector(".Img3");
    let img=document.createElement('img');
    img.src=decodedData;
    img.setAttribute('class','image')
    header.style.visibility='visible';
    header.append(img)
}
}

function setFooter(imgData){

    const decodedData = atob(imgData.Url)

    console.log(imgData)
    if(imgData.imgId==='footer_Img_1'){
        let header=document.querySelector(".Img4");
        let img=document.createElement('img');
        img.src=decodedData;
        img.setAttribute('class','image')
        header.style.visibility='visible';
        header.append(img)
    }
    else if(imgData.imgId==='footer_Img_2'){
        let header=document.querySelector(".Img5");
        let img=document.createElement('img');
        img.src=decodedData;
        img.setAttribute('class','image')
        header.style.visibility='visible';
        header.append(img)
    }
    else if(imgData.imgId==='footer_Img_3'){
        let header=document.querySelector(".Img6");
        let img=document.createElement('img');
        img.src=decodedData;
        img.setAttribute('class','image')
        header.style.visibility='visible';
        header.append(img)
    }
    }

    function setBanner(banner){
        let setImg=document.querySelector('.banner');
     setImg.src=banner[0].Url;
      setImg.style. visibility='visible';
    }