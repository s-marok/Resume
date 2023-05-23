
// alert ("working");

$("#submit").click(function(event){
    event.preventDefault();
  })
   
    function AddRow(){
        var fname = $("#name").val();                             // Get the Value of Id = name input
         var job = $("#job").val();                                    // Get the Value of Id = Job input
         var loginfo = $('input[name=loginfo]:checked').val();
         
       var  n =1

        var table =document.getElementById('show');
        var row= table.insertRow(n);
        var cell1= row.insertCell(0);
        var cell2= row.insertCell(1);
        var cell3= row.insertCell(2);

        cell1.innerHTML = fname;
        cell2.innerHTML = job;
        cell3.innerHTML = loginfo;

        n++;
        document.querySelector("#name").value = "";         // Clear the  input field after submitting
        document.querySelector("#job").value = "";


        console.log(fname, job, loginfo );
    }






function displayDate() {
    document.getElementById("demo").innerHTML =  Date("2015-03-25T12:00:00-06:00");
    console.log(demo);
    }