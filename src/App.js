import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile/Profile";


const App = () => {
  return (
    <main>
      <resetCSS/>
      <Layout>
        <Profile/>
        <div>User</div>
        <div>Repositories</div>
        <div>Starred</div>
        
      </Layout>
    </main>
  )
}

export default App
