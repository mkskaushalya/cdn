let profilePicUpload = document.getElementById('student-image-upload');
let profilePic = document.getElementById('student-pro-pic');
profilePicUpload.onchange = function(){
    profilePic.src = URL.createObjectURL(this.files[0]);
};