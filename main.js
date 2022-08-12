/*estructura jQuery
$("selector").accion
*/
// El selector lo que hace es seleccionar el elemento html al que le vamos a realizar la accion que se indica en ".acción"

// Oculta todos los elementos h1 en el html donde se le llama al js
$("h1").hide(); 


// Esta función hace que el codigo que se ponga dentro se ejecute hasta una vez después de que el documento haya terminado de cargar, esto para que no nos de ningun problema a la hora de ejecutar nuestro código
$(document).ready(function(){
   
});
// Esta es la misma función que arriba pero con la sintaxis resumida
$(function(){

    // Esto le coloca el estilo indicado a todos los elementos seleccionados
    $("p").css({"background-color": "lightblue"});

    //Esto agrega css al elemento del id seleccionado
    $("#segundo").css({"color":"blue"});

    // Esto agrega css al elemento de la clase seleccionada
    $(".primero").css({"text-decoration":"underline"});

    // Evento on click, en este caso selecciona a todos los botones
    $("#btn-hide").click(function(){
        // alert("Hola");

        // Cuando le demos click al botón el elemento se va a ocultar
        $("#segundo").hide();
    });

    $("#btn-show").click(function(){
        $("#segundo").show();
    });

        // Doble click
    $("#btn-show").dblclick(function(){
        $("#segundo").css({"color":"white"});
    }); 

    // Eventos de mouse
    $(".primero").mouseenter(function(){
        // Para desaparecer pero con animación lenta
        $("#segundo").fadeOut();
        $("#tercero").slideUp();
    });
    
    $(".primero").mouseleave(function(){
        // Aparecer con animación
        $("#segundo").fadeIn();
        $("#tercero").slideDown();
    });

    // Se crea animación para que se haga chiquito a 300 px de ancho
    $("#tercero").mouseenter(function(){
        $(".primero").animate({width:"300px"});    
    });

    $("#btn1").click(function(){
        // TOma los valores de texto de ese elemento html seleccionado
        alert($("#segundo").text());
    });

    $("#btn2").click(function(){
        // Esta a diferencia de text tambipen imprime el HTML que se meta al elemento
        alert($("#segundo").html());
    });

    $("#btn3").click(function(){
        // con .attr obtenemos el valor del atributo que se indica, en este caso el de title 
        alert($("#segundo").attr("title"));
    });

    $("#btn4").click(function(){
        // Reemplaza el texto del elemento, pero como texto plano, sin respetar etiquetas escritas
        $("#tercero").text("hola <strong>Negritas</strong>");
        // Este si permite que funcionen las etiquetas html
        $(".primero").html("hola <strong>Negritas</strong>");

        // Este no borra, sino que añade concatenando el texto al final, también funciona el html
        $("#segundo").append("hola <strong>Negritas</strong>No Negritas");

        // Este hace lo mismo que el anterior pero añade el texto al inicio
        $("#segundo").prepend("Inicio <strong>Inicio</strong>");

        // Este crea un nuevo parrafo, si no tuviera el <p> crearia un nuevo parrafo solo la primera vez que se clickea
        $("#segundo").after("<p>Inicio <strong>Inicio</strong></p>");

        // Lo mismo pero antes
        $("#segundo").before("<p>Inicio <strong>Inicio</strong></p>");
     
    });

    $("#btn5").click(function(){
        //Elimina el elemento, no lo oculta, lo borra
        $("#segundo").remove();
    });
    $("#btn6").click(function(){
        //Vacia el elemento pero continua existiendo
        $("#segundo").empty();
    });

    $("#btn7").click(function(){
        //añade la clase al elemento
        $("h2").addClass("red");
    });
    $("#btn8").click(function(){
        //remuve la clase al elemento
        $("h2").removeClass("red");
    });
    $("#btn9").click(function(){
        //añade y quita la clase segun se vaya pulsando (valida si está o no puesta)
        $("h2").toggleClass("blue");
    });
});