# MoodRequest
Request System for Internal use

Basically this is a form for sales to use to request things from specific departments.  Very small project.

CUURRENT ISSUE:
There are 2 scripts that show or hide fields or field data based on selections. Both scripts seem to work fine when not added to the project but once added the show hide does not work for the following function...

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
    
I am expecting the fields with class custommusiconly to show when the dropdown with ID musicrtype is custom.

Thanks for your help.
