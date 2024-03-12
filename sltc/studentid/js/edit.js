$(document).ready(function(){
    document.querySelector(".loader").classList.remove("hidden");
    $.ajax({
        url: "inc/action.php",
        type: "POST",
        data: {
        search: "empty",
        method: "search-student-update"
        },
        success: function(data){
        $("#student-update-list").html(data);
        document.querySelector(".loader").classList.add("hidden");
        }
    });
    $.ajax({
        url: "inc/action.php",
        type: "POST",
        data: {
        search: "empty",
        method: "search-student-update"
        },
        success: function(data){
        $("#student-update-list").html(data);
        document.querySelector(".loader").classList.add("hidden");
        }
    });
    $("#student-search-update").on("keyup", function() {
        document.querySelector(".loader").classList.remove("hidden");
        var value = $(this).val();
        if(value != ""){
            $.ajax({
            url: "inc/action.php",
            type: "POST",
            data: {
                search: value,
                method: "search-student-update"
            },
            success: function(data){
                $("#student-update-list").html(data);
                document.querySelector(".loader").classList.add("hidden");
            }
            });
        }else{
            $.ajax({
                url: "inc/action.php",
                type: "POST",
                data: {
                search: "empty",
                method: "search-student-update"
                },
                success: function(data){
                $("#student-update-list").html(data);
                document.querySelector(".loader").classList.add("hidden");
                }
            });
        }
        });
       
});