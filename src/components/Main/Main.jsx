import { useContext } from "react";
import styles from "./Main.module.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

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

  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompts,
    setPreviousPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  } = useContext(Context);

  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>

      {!showResult && (
        <>
          {" "}
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
        </>
      )}

      {showResult && (
        <>
          <div className={styles.result}>
            <div className={styles.resultTitle}>
              <img src={assets.user_icon} alt="😎" />
              <p>{recentPrompt}</p>
            </div>
            <div className={styles.resultData}>
              <img src={assets.gemini_icon} alt="🤖" />
              {loading ? (
                <div className={styles.loader}>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        </>
      )}

      <div className={styles.mainBottom}>
        <div className={styles.searchBox}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
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
