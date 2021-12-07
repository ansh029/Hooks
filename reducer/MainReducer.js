const myReducer = (state, action) => {
    switch( action.type) {
      case 'inc': 
        return {
          count:state.count+1
        };
      case 'dec': 
        return {
          count:state.count-1
        };

      case 'reset':
        // return action.payload;

        return init()
     
        default :

        return new Error();
     
    }
  };


 export const init=()=>{
   return{count:2}
 };

  export default myReducer;