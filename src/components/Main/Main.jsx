import {} from "react";
import styles from "./Main.module.css";
import { assets } from "../../assets/assets";

const Main = () => {
  const cards = [
    {
      data: "Suggest beautiful places to see on an upcoming road trip",
      image: "compass_icon",
    },
    {
      data: "Briefly summarize this concept: urban planning",
      image: "bulb_icon",
    },
    {
      data: "Brainstorm team bonding activities for our work retreat",
      image: "message_icon",
    },
    {
      data: "Tell me about React js and React native",
      image: "code_icon",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.greet}>
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today 😉</p>
        </div>

        <div className={styles.cards}>
          {cards &&
            cards.map((idx) => {
              return (
                <div className={styles.card} key={idx}>
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.mainBottom}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className={styles.bottomInfo}>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Main;
