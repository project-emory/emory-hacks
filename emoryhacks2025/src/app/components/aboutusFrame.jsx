import styles from './aboutus.module.css';

const Frame = () => {
  return (
    <div
      className={`${styles.emoryHacksPresentedByProjParent} bg-gradient-to-r from-white to-brand-tertiary p-6 rounded-lg shadow-md`}
      style={{
        backgroundColor: "rgba(79, 225, 255, 0.8)",
        width: "50%", // Keep the adjusted width
        height: "42%", // Keep the adjusted height
        marginLeft: "45%", // Move more to the right
        marginTop: "20px", // Add margin to adjust positioning from the top
      }}
    >
      <div className={styles.emoryHacksPresented}>
        <p className="mt-3 text-[14px] md:text-[1.8vw] fond-bold text-black">
          Emory Hacks, presented by PROJECT Emory, is a hackathon hosted at Emory University.
          We are committed to bringing hundreds of students together for an intensive 36-hour
          hackathon where innovation comes to life. Participants build cutting-edge applications,
          websites, and digital tools while learning from industry professionals through hands-on
          workshops and mentorship. Whether you're a first-time coder or a seasoned developer,
          join us to push your creative and technical boundaries in this dynamic weekend of
          building and collaboration.
        </p>
      </div>
    </div>
  );
};

export default Frame;
