
   import React, { useState } from "react";

   const Add = (props) => {
     const initialFormState = { id: null, name: "", username: "" };
     const [user, setUser] = useState(initialFormState);
   
     // should this be a different var type? table is not updating with new additions
     // update state based on event in input
     const inputHandler = (event) => {
       const { name, value } = event.target;
       setUser({ ...user, [name]: value });
       
     };
   
     return (
       <form
         onSubmit={(event) => {
           // default event for form is submit (preventing with a check)
           event.preventDefault();
           if (!user.name || !user.username) {
             alert("Enter both a Name and Username please!");
             return;
           } else {
             props.addUser(user);
             setUser(initialFormState);
           }
         }}
       >
//           The label is used to specify column names 
         <label>Name</label>
         <input
           type="text"
           name="name"
           placeholder="Enter a name..."
           value={user.name}
           onChange={inputHandler}
         />
         <label>nameofcitizen</label>
         <input
           type="text"
           name="username"
           placeholder="Enter a username..."
           value={user.username}
           onChange={inputHandler}
         />
         <button className="btn btn-success">Add New User</button>
// the button will help add a new user 
       </form>
     );
   };
   
   export default Add;
