let   cardName = document.querySelector('.person_name'),
      cardNumber  = document.querySelector('.card_number'),
      datePlace  = document.querySelector('.date_place'),
      cvvPlace = document.querySelector('.cvv_text'),
      inputName = document.querySelector('.input_name'),
      inputNumber = document.querySelector('.input_number'),
      inputYear  = document.querySelector('.year_input'),
      inputMonth = document.querySelector('.month_input'),
      inputCvc = document.querySelector('.cvc_input'),
      btnAdd  = document.querySelector('.btn_add'),
      btnComplete = document.querySelector('.btn_continue');

      let personCard ={};






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

        if(inputName.value != '' && inputNumber.value != '' && inputMonth.value != '' &&  inputYear.value != '' && inputCvc.value != '' && inputNumber.value.length == 16 && inputCvc.value.length == 3){
          cardName.innerHTML = `${inputName.value}`;
          cardNumber.innerHTML = `${formatCardCode()}`;
          cvvPlace.innerHTML  = `${inputCvc.value}`;
        }else{
          alert('Incorrect Data');
          inputName.value = ''
          inputCvc.value = '';
          inputNumber.value = '';
        }
        if(inputMonth.value != '' && inputYear.value != '' && inputMonth.value <= 12 && inputYear.value >= 2030){
          datePlace.innerHTML = `${inputMonth.value} / ${inputYear.value}`;
         
        }else{
          alert('Incorrect Data');
       
        }
        if(inputName.value != '' && inputNumber.value != '' && inputMonth.value != '' &&  inputYear.value != '' && inputCvc.value != ''){
 
         document.querySelector('.right_container').style.display = 'none';
         document.querySelector('.complete_container').style.display = 'flex';

        }else{
         document.querySelector('.right_container').style.display = 'flex';
         inputMonth.value = ''
         inputYear.value =''
         datePlace.innerHTML = `00/00`
          alert('Incorrect Data')
     
        }
        
    });


  }



  createCard();

  
  btnComplete.addEventListener('click', () => {
    

    inputName.value = '';
    inputNumber.value = '';
    inputCvc.value ='';
    inputMonth.value  = '';
    inputYear.value = '';
    cardName.innerHTML = '';
    cardNumber.innerHTML = '0000 0000 0000 ';
    datePlace.innerHTML = '00/00';
    cvvPlace.innerHTML = '';

  
 
    document.querySelector('.right_container').style.display = 'flex';
    document.querySelector('.complete_container').style.display = 'none';


  });

  console.log(personCard);