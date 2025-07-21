import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Players from "./Components/Player/Players";
import CallToAction from "./Components/CallToAction/CallToAction";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [players, setPlayer] = useState([]);
  const [money, setMoney] = useState(0);
  const [select, setSelect] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then(res => res.json())
      .then(data => {
        setPlayer(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
  const addMoney = () => {
    setMoney(money + 600000);
    toast("Claim Free Credits");
  };
  const singlePlayer = id => {
    if (!money) {
      toast("Not Enough Blance");
      return;
    }

    if (select.length >= 6) {
      toast.warn("You can select maximum 6 players");
      return;
    }

    const allReadySelected = select.find(p=> p.id === id.id);
    if(allReadySelected){
      toast.info("Player Allready selected")
      return
    }

    setSelect([...select, id]);
    toast.success("Player Select Success");

    const newMoney = parseInt(money - id.price);
    setMoney(newMoney);

  };
  const deletePlayer = (id) =>{
    const oldPlayer = select.filter(p => p.id !== id.id);
    setSelect(oldPlayer);
    toast.warn(`${id.name} Has Been Deleted`)
  }
  return (
    <>
      <div className="md:px-20 px-3">
        <Navbar money={money} />
        <Banner addMoney={addMoney} />
        <Players players={players} singlePlayer={singlePlayer} select={select} deletePlayer={deletePlayer} />
        <CallToAction />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
