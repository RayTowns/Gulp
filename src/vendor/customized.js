$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        20:{
            items:1,
            nav:false,
            loop:true
        },
        700:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });

  $(".btn-primary").click(function(){
  alert('Em breve mais informações!')
  });

  $("#home").click(function(){
    $("#home").css("color", "white")
  });

  $("#joias").click(function(){
    $("#joias").css("color", "white")
  });

  $("#sobre").click(function(){
    $("#sobre").css("color", "white")
  });

  $("#contato").click(function(){
    $("#contato").css("color", "white")
  });

  $(".nav-link").mouseover(function(){
    $("li") 
    .animate({fontSize:"18px"}, 1000)
  });

  $(".nav-link").mouseleave(function(){ 
    $("li").css({
    fontSize:""
    });
  });

  $("h1").mouseenter(function(){
    $("h1").css("color", "crimson");
  });

  $("h1").mouseleave(function(){
    $("h1").css("color", "purple");
  });

  $("#botao-1").click(function(){
    $("#botao-1").css("background-color", "purple")
  });

  $("#botao-2").click(function(){
    $("#botao-2").css("background-color", "purple")
  });

  $("#botao-3").click(function(){
    $("#botao-3").css("background-color", "purple")
  });

  $("#botao-4").click(function(){
    $("#botao-4").css("background-color", "purple")
  });

  $("#botao-5").click(function(){
    $("#botao-5").css("background-color", "purple")
  });


    $("#contato").on("click", function(e){

      e.preventDefault();

      let elem = $(this).attr("rel")

      $(".modal-body").html($("#" +elem).html())

      let myModal = new bootstrap.Modal($("#faleConosco"))
      myModal.show()
  });


  $("#sobre").on("click", function(e){

    e.preventDefault();

    let elem = $(this).attr("rel")

    $(".modal-body").html($("#" +elem).html())

    let myModal = new bootstrap.Modal($("#historia"))
    myModal.show()
  });


    $("body").on("click", ".modal", function(){
      $(this).draggable();
    });

    function validaNome() {

      const nome = $("#recipient-name");

      if (nome.val() == "" || nome.val().length <= 4){
      console.log("Campo" + " " + "nome" + " " + "ser preenchido")
      nome.addClass("invalid")
      nome.parent().find(".text-muted").show("slow")
      e.preventDefault();
      return false
      } else {
       nome.removeClass("invalid")
       nome.addClass("valid")
       nome.parent().find(".text-muted").hide("fast")
       return true
      }
    }

    function validaEmail() {

      const email = $("#recipient-email");
      var $emailValido = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (email.val().length >= 3 && email.val().match($emailValido)){
      email.addClass("valid")
      email.removeClass("invalid")
      email.parent().find(".text-muted").hide("fast")
      return true
      } else {
       email.removeClass("valid")
       email.addClass("invalid")
       email.parent().find(".text-muted").show("slow")
       e.preventDefault();
       return false
      }
    }

    function validaData() {

      const data = $("#datepicker");

      if (data.val() == ""){
      console.log("Campo" + " " + "data" + " " + "ser preenchido")
      data.addClass("invalid")
      data.parent().find(".text-muted").show("slow")
      e.preventDefault();
      return false
      } else {
       data.removeClass("invalid")
       data.addClass("valid")
       data.parent().find(".text-muted").hide("fast")
       return true
      }
    }

    function validaCep() {

      const cep = $("#recipient-cep");

      if (cep.val() == ""){
      console.log("Campo" + " " + "cep" + " " + "ser preenchido")
      cep.addClass("invalid")
      cep.parent().find(".text-muted").show("slow")
      e.preventDefault();
      return false
      } else {
       cep.removeClass("invalid")
       cep.addClass("valid")
       cep.parent().find(".text-muted").hide("fast")
       return true
      }
    }

    function validaPhone() {

      const phone = $("#recipient-phone");

      if (phone.val() == ""){
      console.log("Campo" + " " + "phone" + " " + "ser preenchido")
      phone.addClass("invalid")
      phone.parent().find(".text-muted").show("slow")
      e.preventDefault();
      return false
      } else {
       phone.removeClass("invalid")
       phone.addClass("valid")
       phone.parent().find(".text-muted").hide("fast")
       return true
      }
    }

    $("#formData").submit(function(e){

      e.preventDefault();

      const name = $("#recipient-name");
      const email = $("#recipient-email");

     if(name.hasClass("invalid") || email.hasClass("invalid")){
      e.preventDefault();
      return false
      } else {
      $("#formData")[0].reset()
      $("#sucessMsg").show("slow")
      submit.this();
      return true
      }
    });


  $("body").on("blur", "#recipient-name", function(){
      validaNome()
  })

  $("body").on("blur", "#recipient-email", function(){
      validaEmail()
  })

  $("body").on("blur", "#datepicker", function(){
    validaData()
  })

  $("body").on("blur", "#recipient-cep", function(){
    $(this).mask('00000-000');
    validaCep()
  })

  $("body").on("blur", "#recipient-phone", function(){
    $(this).mask('(00) 00000-0000');
    validaPhone()
  })

});