
function printStudent(regnumber){
  var oldpagetitle = document.title;
  document.title = "Print_Student_" + regnumber;
  var iframe = document.getElementById('frame-' + regnumber).contentWindow;
  iframe.focus();
  iframe.print();
  document.title = oldpagetitle;
  
}
function printBulk(pagenumber){
  var oldpagetitle = document.title;
  document.title = pagenumber;
  var iframe = document.getElementById('frame-bulk').contentWindow;
  iframe.focus();
  iframe.print();
  document.title = oldpagetitle;
}
function printStudentImage(regnumber){
  // var oldpagetitle = document.title;
  // document.title = "Print_Student_" + regnumber;
  // var iframe = document.getElementById('frame-' + regnumber).contentWindow;
  // iframe.focus();
  // iframe.print();
  // document.title = oldpagetitle;
  html2canvas(document.querySelector('#student-update-list')).then((canvas) => {
    let base64image = canvas.toDataURL('image/png');
    //console.log(base64image);
    let pdf = new jsPDF('p', 'px', [774, 813]);
    pdf.addImage(base64image, 'PNG', 0, 0, 580, 609.8);
    pdf.save(regnumber + ".pdf");

  });

}