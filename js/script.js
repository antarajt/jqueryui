$(document).ready(function(){

//dragable
    $( "#draggable" ).draggable();

    $( "#draggable1" ).draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
    $( "#draggable2" ).draggable({ cursor: "crosshair", cursorAt: { top: -5, left: -5 } });
    $( "#draggable3" ).draggable({ cursorAt: { bottom: 0 } });

    //handles dragable

    $( "#draggable4" ).draggable({ handle: "p" });
    $( "#draggable5" ).draggable({ cancel: "p.ui-widget-header" });
    $( "#draggable4, #dragable5, p" ).disableSelection();

  //revert position

  $( "#draggable6" ).draggable({ revert: true });
    $( "#draggable7" ).draggable({ revert: true, helper: "clone" });

    //dropable


    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });




    //resizable start
    $( "#resizable" ).resizable();

    //resizable animate
    $("#resizable1").resizable({
        animate:true
    });
    //constrain
    $( "#resizable2" ).resizable({
        containment: "#containment"
    });
    //helper
    $( "#resizable3" ).resizable({
        helper: "ui-resizable-helper"
      });

//selectable

    $( "#selectable" ).selectable();

    //display as grid
    $( "#selectable1" ).selectable();


//sortable

    $( "#sortable" ).sortable();



//accordian

  $( "#accordion" ).accordion();

  $( "#accordion1" ).accordion({
    collapsible: true
  });
  $( "#accordion3" ).accordion({
    heightStyle: "content"
  });

//autocomplete

      var availableTags = [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Python",
        "Java",
        "Ruby",
        "Perl",
        "Angularjs",
        "Reactjs",
        "React",
        "Cobol",
        "Basic",
        "Scale",
        "C++",
        "c#","C",

      ];

      $("#tags").autocomplete({
        source: availableTags
      });


//datepicker

    $( "#datepicker" ).datepicker();
    //animation

    $( "#datepicker1" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( "#datepicker1" ).datepicker( "option", "showAnim", $( this ).val() );
    });

    $( "#datepicker2" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });



    //effect

    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }

    //animate

    var state = true;
    $( "#button1" ).on( "click", function() {
      if ( state ) {
        $( "#effect1" ).animate({
          backgroundColor: "rgb(0, 0, 0)",
          color: "#fff",
          width: 540
        }, 1000 );
      } else {
        $( "#effect1" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 400
        }, 1000 );
      }
      state = !state;
    });

    //selection product

    var circle = $( "#circle" );
 
    $( "#radius" ).selectmenu({
      change: function( event, data ) {
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
     });
 
    $( "#color" ).selectmenu({
       change: function( event, data ) {
         circle.css( "background", data.item.value );
       }
     });

   
});