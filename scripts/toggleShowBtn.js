  $(document).ready(function() {
        $('.showprocess').click(function() {
                $('.toggle').slideToggle("slow");
        });

        $("#fold").click(function () {
        $(".fold_p").fadeOut(function () {
            $(".fold_p").text(($(".fold_p").text() == '+ Show design process') ? '- Hide design process' : '+ Show design process').fadeIn();
            })
         })
    });
