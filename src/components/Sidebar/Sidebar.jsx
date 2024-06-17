import { useContext, useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const { previousPrompts, newChat, loadPrompt } = useContext(Context);

  const [extended, setExtended] = useState(false);
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <img
          onClick={() => setExtended((prev) => !prev)}
          className={styles.menu}
          src={assets.menu_icon}
          alt="😎"
        />
        <div onClick={() => newChat()} className={styles.newChat}>
          <img src={assets.plus_icon} alt="📃" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className={styles.recent}>
            <p className={styles.recentTitle}>Recent</p>
            {previousPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className={styles.recentEntry}
                  key={index}
                >
                  <img src={assets.message_icon} alt="💭" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
          <img src={assets.question_icon} alt="❓" />
          {extended && <p>Help</p>}
        </div>
        <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
          <img src={assets.history_icon} alt="😄" />
          {extended && <p>Activity</p>}
        </div>
        <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
          <img src={assets.setting_icon} alt="😉" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
