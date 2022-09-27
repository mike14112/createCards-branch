let   cardName = document.querySelector('.person_name'),
      cardNumber  = document.querySelector('.card_number'),
      monthPlace  = document.querySelector('.month_place'),
      yearPlace  = document.querySelector('.year_place'),
      cvvPlace = document.querySelector('.cvv_text'),
      inputName = document.querySelector('.input_name'),
      inputNumber = document.querySelector('.input_number'),
      inputYear  = document.querySelector('.year_input'),
      inputMonth = document.querySelector('.month_input'),
      input_cvc = document.querySelector('.cvc'),
      btnAdd  = document.querySelector('.btn_add');


    let  cardNumberPerson = 0;

      function formatCardCode() {
  
         cardNumberPerson = inputNumber.value.replace(/[^\d]/g, '').substring(0,16);
          if(cardNumberPerson != ''){
    
              cardNumberPerson = cardNumberPerson.match(/.{1,4}/g);
              console.log(cardNumberPerson);
              cardNumberPerson = cardNumberPerson.join(' ');
    
          }else{
    
          }
      
        this.value = cardNumberPerson;
        
        return cardNumberPerson
     };


  const createCard  = function(){
    btnAdd.addEventListener('click', () =>{

   
        if(inputName.value != '' && inputNumber.value != '' && inputMonth.value != '' &&  inputYear.value != '' && input_cvc.value != ''){

            
        }
    });

  }
