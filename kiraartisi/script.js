/* seçeneklerin çalışması*/

 function buttonact(){
 var radio0= document.getElementById("artisorani").checked; 
 var radio1= document.getElementById("ozelartisorani").checked;
 var radio2= document.getElementById("konut").checked;
 var radio3= document.getElementById("isyeri").checked;



  if(radio0 == true && radio2 == true && radio3 == false){
    konutartishesapla();

  }
  else if(radio0 == true && radio3 == true && radio2 == false){
    isyeriartishesapla();
  }

else if(radio0 == false && radio1 == true && radio2 == false && radio3 == false){
    sum();

}

}

/*özel artış oranı hesaplma fonksiyonu*/
 function sum() {
       var txtFirstNumberValue = document.getElementById('ozelartisoran').value;
       var txtSecondNumberValue = document.getElementById('mevcutkira').value;


       var artis= parseInt(txtFirstNumberValue) * parseInt(txtSecondNumberValue) / 100;
       var result= parseInt(txtSecondNumberValue) + artis;
       if (!isNaN(result)) {
           document.getElementById('hesapsonuc').value = result;
       }
   }

/*konut için aya göre artış hesaplama*/
    function konutartishesapla() {
       var FirstNumberValue = document.getElementById('mevcutkira').value;
       var Months = document.getElementById('aylar').value;


       if( Months == '1'){
       var artis= parseInt(FirstNumberValue) * 4.3 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
     else if (Months == '2'){
      var artis= parseInt(FirstNumberValue) * 4.96 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
     else if (Months == '3'){
      var artis= parseInt(FirstNumberValue) * 5.87 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
     else if (Months == '4'){
      var artis= parseInt(FirstNumberValue) * 6.89 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
     else if (Months == '5'){
      var artis= parseInt(FirstNumberValue) * 8.01 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
     else if (Months == '6'){
      var artis= parseInt(FirstNumberValue) * 9.02 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
     else if (Months == '7'){
      var artis= parseInt(FirstNumberValue) * 9.98 /100;
       var result= parseInt(FirstNumberValue) + artis;
     }
       if (!isNaN(result)) {
           document.getElementById('hesapsonuc').value = result;
       }
   }

/*iş yeri için aya göre artış hesaplama*/
   function isyeriartishesapla() {
       var FirstNumber = document.getElementById('mevcutkira').value;
       var Months = document.getElementById('aylar').value;

/*ocak*/
   if( Months == '1'){
       var artis= parseInt(FirstNumber) * 6.04 /100;
       var result= parseInt(FirstNumber) + artis;
     }

     /*şubat*/
     else if (Months == '2'){
      var artis= parseInt(FirstNumber) * 6.36 /100;
       var result= parseInt(FirstNumber) + artis;
     }
     /*mart*/
     else if (Months == '3'){
      var artis= parseInt(FirstNumber) * 6.875 /100;
       var result= parseInt(FirstNumber) + artis;
     }
     /*nisan*/
     else if (Months == '4'){
      var artis= parseInt(FirstNumber) * 7.55 /100;
       var result= parseInt(FirstNumber) + artis;
     }
     /*mayıs*/
     else if (Months == '5'){
      var artis= parseInt(FirstNumber) * 8.335 /100;
       var result= parseInt(FirstNumber) + artis;
     }
     /*haziran*/
     else if (Months == '6'){
      var artis= parseInt(FirstNumber) * 9.055 /100;
       var result= parseInt(FirstNumber) + artis;
     }
     /*temmuz*/
     else if (Months == '7'){
      var artis= parseInt(FirstNumber) * 9.67 /100;
       var result= parseInt(FirstNumber) + artis;
     }
       if (!isNaN(result)) {
           document.getElementById('hesapsonuc').value = result + ' TL';
       }
   }