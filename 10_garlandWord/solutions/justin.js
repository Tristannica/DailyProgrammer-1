function garland (string){
      var start = string.split('');
      var end = string.split('');
      function count (){
        start.pop();
        end.shift();
        return start.length
      }
      while(count()){
        if (start.join('') === end.join('')){
          return start.length
        }
      }
      return 0
}
