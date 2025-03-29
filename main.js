 /* html den elemanları çeker */
 const navbar=document.querySelector(".navbar");
 const menuBtn=document.querySelector("#menu-btn");

 /* menu btn e tıklanınca navbar kısımına class ekle çıkar işlemi yapar
  */
 menuBtn.addEventListener('click',()=> {
    navbar.classList.toggle("active");
 })