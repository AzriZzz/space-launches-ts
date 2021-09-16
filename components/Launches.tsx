import styles from "../styles/Home.module.css";
import { ISpaceX } from "../type";

const Launches: React.FC<{ launch: ISpaceX }> = ({ launch }) => {
  return (
    <a
      key={launch.id}
      href={launch.links.video_link}
      target="_blank"
      className={styles.card}
      rel="noreferrer"
    >
      <h2>{launch.mission_name}</h2>
      <p>
        <strong>Launch Time:</strong>{" "}
        {new Date(launch.launch_date_local).toLocaleDateString("en-my")}
      </p>
    </a>
  );
};

export default Launches;
