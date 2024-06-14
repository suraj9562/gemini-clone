import { useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
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
        <div className={styles.newChat}>
          <img src={assets.plus_icon} alt="📃" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className={styles.recent}>
            <p className={styles.recentTitle}>Recent</p>
            <div className={styles.recentEntry}>
              <img src={assets.message_icon} alt="💭" />
              <p>What the fuck !!!</p>
            </div>
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
