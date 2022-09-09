$(document).ready(function (){
  $(".owl-carousel").owlCarousel();
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
 })


 $("#sobre").on("click", function(e){

  e.preventDefault();

  let elem = $(this).attr("rel")

  $(".modal-body").html($("#" +elem).html())

  let myModal = new bootstrap.Modal($("#historia"))
   myModal.show()
  })


  $("body").on("click", ".modal", function(){
    $(this).draggable();
  })

function validate(elem) { 
  if (elem.val() == "") {
      console.log("Campo" + " " + elem.attr("name") + " " + "ser preenchido")
      elem.addClass("invalid")
      elem.parent().find(".text-muted").show("slow")
        return false
      } else {
        elem.removeClass("invalid")
        elem.parent().find(".text-muted").hide("fast")
        return true
      }
}


$("body").on("submit", "#faleConosco", function(e) {

    e.preventDefault()

    const name = $("#recipient-name")
    const email = $("#recipient-email")

    validate(name)
    validate(email)

    if(name.hasClass("invalid") || email.hasClass("invalid")){
      console.log("verifique os campos em vermelho")
      return false
    } else {
      $(this).submit()
    }
})


$("body").on("blur", "#recipient-name", function(){
  validate($(this))
})

$("body").on("blur", "#recipient-email", function(){
  validate($(this))
 })

$("body").on("blur", "#recipient-date", function(){
  $(this).mask('00/00/0000');
  validate($(this))
})

$("body").on("blur", "#recipient-cep", function () {
  $(this).mask('00000-000');
  validate($(this))
})

$("body").on("blur", "#recipient-phone", function () {
  $(this).mask('(00) 0000-0000');
  validate($(this))
})

$("body").on("focus", "#datepicker", function(){
  $(this).datepicker();
})
