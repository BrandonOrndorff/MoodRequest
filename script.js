    /*global $, jQuery*/

    $('#requesttype').on('change', function () {
      if (this.value === "marketing") {
        $('#marketing').show();
        $('#music').hide();
        $('#messaging').hide();
        $('#visual').hide();
      }
    if (this.value === "music") {
        $('#marketing').hide();
        $('#music').show();
        $('#messaging').hide();
        $('#visual').hide();
      }
    if (this.value === "messaging") {
        $('#marketing').hide();
        $('#music').hide();
        $('#messaging').show();
        $('#visual').hide();
      }
    if (this.value === "visual") {
        $('#marketing').hide();
        $('#music').hide();
        $('#messaging').hide();
        $('#visual').show();
      }
    if (this.value === "") {
        $('#marketing').hide();
        $('#music').hide();
        $('#messaging').hide();
        $('#visual').hide();
      }
    });

    function includeHTML() {
      var z, i, elmnt, file, xhttp;
      /*loop through a collection of all HTML elements:*/
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
          /*make an HTTP request using the attribute value as the file name:*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
              /*remove the attribute, and call this function once more:*/
              elmnt.removeAttribute("w3-include-html");
              includeHTML();
            }
          }      
          xhttp.open("GET", file, true);
          xhttp.send();
          /*exit the function:*/
          return;
        }
      }
    }

  $(function(){
        $('#choosedepartment').change(function(){
            if($(this).val() == 'premier sales'){
                $('.premieronly').show();
            } else {
                $('.premieronly').hide();
            }
        });
    });

    //MUSIC DESIGN REQUEST FUNCTIONS

    /* Choose Music Request Type */
    $(function(){
        $('#musicrtype').change(function(){
            if($(this).val() == 'Custom'){
                $('.custommusiconly').show();
            } else {
                $('.custommusiconly').hide();
            }
        });
    });