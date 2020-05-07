function myFunction(){
    var rows = document.getElementsByTagName("tr");
    for(var count=0; count <rows.length;count++){
        if(count==0){

        }else if(count%2==0){

        }else{
            rows[count].style.background="black";
            rows[count].style.color ="white";
        }
    }
}