

let save = document.querySelectorAll(".submitBtn");
let fname = document.querySelectorAll(".fname");
let lname = document.querySelector(".lname");
let newEmail = document.querySelectorAll(".email");
let phone = document.querySelector(".phone");
let password = document.querySelectorAll(".password");

save.forEach((e) => {
  e.addEventListener("click", () => {
    if (fname.value === "") {
      alert("please fill out the entry FIRST NAME");
    }
    if (lname.value === "") {
      alert("please fill out the entry LAST NAME");
    }
    if (newEmail.value === "") {
      alert("please fill out the Email Address");
    }
    if (phone.value.length < 10) {
      alert("please fill out the Phone Number");
    }
    if (password.value.length < 8) {
      alert("Please Fill the Details.");
    }
  });
});

//  async function getData(){
//   let url="http://101.53.132.44/api-webinars/public/api/demo-10xtech/auth/register";

//   let data= await fetch(url)
//  }

//  getData()

 
 async function abc(){
    
  let url3="http://101.53.132.44/api-webinars/public/api/demo-10xtech/auth/register";
  let url4= "http://101.53.132.44/api-webinars/public/api/demo-10xtech/auth/viewer";
  let url1='https://api-paper.id8lab.net/public/api/product/categories';
    let url2='https://api-paper.id8lab.net/public/api/users/login';

  let data1 = await fetch(url4,{
    method:"post",
    // "content-type":"application/json",
    // accept:"application/json",
    // body: JSON.stringify({
    //     "login_name": "k@kk.com",
    //     "password": "Asd@123456"
    // })
  });

  let parsedData = await data1.text();
  console.log(parsedData)



//  let data2 = await fetch(url3);
//   let parsedData2 = await data2.text();
//   console.log(parsedData2)
 

}
abc()