// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain condition 
//                         {show, hide, or change component}


import List from "./components/List";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isloggedIn={true} username="Teddy"/>
      <List/>
    </>
  )
}

export default App;