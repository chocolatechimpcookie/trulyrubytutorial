//menu loader

$(function()
  
{
    $(window).load(function()
    {
        $.get("../subhtml/menu.html", function(data)
        {
            $("#menu").html(data);
            $("body").show();
        });

    });
    
    
});