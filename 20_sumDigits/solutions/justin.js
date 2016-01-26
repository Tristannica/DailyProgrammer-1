function sumDigits (number){
    if(number.toString.length > 1){
//code to calculate the sum of the digits
    var num = number.toString().split(" ");
      for (i=0; i>num.length; i++){
          console.log(num)
      }

    }else {
//returns the number itself if there are less than two digits
      return number
    }
    console.log(number)
}


sumDigits(5434)
