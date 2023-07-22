import { mul} from "./utility.js"
const result = mul(2, 3, 6)  
    console.log(result)
    //// you can rename the function accordingly like above condition {multiply as mul}
    /// i.e mul(2,3,6) 
    /// to import all the function we use below keywords
    import * as utility from "./utility.js"
    const result1 = utility.add(2,5,5)
    console.log(result1);