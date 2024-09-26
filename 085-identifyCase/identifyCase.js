function id(c_str) {
    if (c_str.length === 0) {
     return "empty string";
   }
 
   const kebabCaseRegex = /^[a-z]+(-[a-z]+)*$/;
   const camelCaseRegex = /^[a-z]+([A-Z][a-z]*)*$/;
   const snakeCaseRegex = /^[a-z]+(_[a-z]+)*$/;
 
   if (kebabCaseRegex.test(c_str)) {
     return "kebab";
   } else if (camelCaseRegex.test(c_str)) {
     return "camel";
   } else if (snakeCaseRegex.test(c_str)) {
     return "snake";
   } else {
     return "none";
   }
 }