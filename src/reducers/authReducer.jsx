const auth = {};

const authReducer = (state = auth, actions) => {
  switch (actions.type) {
    case "LOGIN":
      
      return {
        uid: actions.uid,
      };
    case "LOGOUT":
      return {};
      
  

    default:
      return state;
  }
};
export default authReducer;
