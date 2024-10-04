function capitalize(s,arr){
  
    let result = s.split('');
   
    arr.map(e => {
      if (result[e]) {
        result[e] = result[e].toUpperCase()
      }
    })
    
    return result.join('')
  };