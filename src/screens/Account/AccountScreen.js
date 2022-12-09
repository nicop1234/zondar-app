import React, {useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { UserLogedScreen } from "./UserLoged/UserLogedScreen"
import { UsersGuestSceen } from "./UserGuestLoged/UserGuestLoged"
import { LoadingModal } from "../../components/Modal/LoadingModal";
export function AccountScreen() {

  const [hasLogged, setHasLogged] = useState("")

 
  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false)
    })
  },[])

  if (hasLogged === ""){
    return <LoadingModal text={"cargando"} show/>
  }

  return hasLogged ? <UserLogedScreen/> : <UsersGuestSceen/>

;}