function deleteStudent(id){
    var deleteBtn = document.getElementById("delete-btn-"+id);
    var name = deleteBtn.getAttribute('data-name');
    var confirmDelete = confirm("Are you sure you want to delete "+name+"?");
    if(confirmDelete){
        document.querySelector(".loader").classList.remove("hidden");
        $.ajax({
            url: root+"inc/action.php",
            type: "POST",
            data: {
                delete_student: id,
                method: "delete_student"
            },
            success: function(data){
                location.reload();
            }
        });
    }
}