import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const themes={
    winter:"winter"
,dracula:"dracula"
}


const getThemeFromLocalStorage=()=>{
    const theme=localStorage.getItem("theme" || themes.dracula);
    document.documentElement.setAttribute("data-theme",theme);
    return theme;
}
const initialState={
    user:{userName:"dummy user"},
    theme:getThemeFromLocalStorage()
}
const userSlice=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        loginUser:(state,action)=>{
            console.log("login ")
        },
        logOut:(state)=>{
            state.user=null;
            localStorage.removeItem("user");
            toast.success("logged out succesfully ..")
        },
        toggleTheme:(state)=>{
           const {dracula,winter}=themes;
           state.theme=state.theme===dracula ? winter:dracula;
           document.documentElement.setAttribute("data-theme",state.theme);
           localStorage.setItem("theme",state.theme);
        }
    }
})

export const {loginUser,logOut,toggleTheme}=userSlice.actions;
export default userSlice.reducer;