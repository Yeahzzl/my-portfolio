import Image from "next/image";
import styles from "../styles/projects.module.scss";
import pug from "../app/assets/img/퍼그.webp";
import keyboduck from "../app/assets/img/키보덕.webp";
import travel from "../app/assets/img/여행하자.webp";
import eat from "../app/assets/img/트라이잇.webp";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>PROJECTS</h2>
        <div className={styles.imgGrid}>
          <div className={styles.imgWrap}>
            <Image src={pug} alt="pug" width={700} height={400} />
            <Link href="https://panoramic-reptile-f96.notion.site/Puppy-Ground-d7b0b5c1e23c4805b7f1b32063f8b951?pvs=4">
              <div className={styles.overlay}>
                <p>Puppy Ground</p>
                <span>2024.01.04 ~ 02.08 (5주)</span>
              </div>
            </Link>
          </div>
          <div className={styles.imgWrap}>
            <Image src={keyboduck} alt="keyboduck" width={600} height={400} />
            <div className={styles.overlay}>
              <p>Keyboduck</p>
              <span>2023.12.26 ~ 01.02 (1주)</span>
            </div>
          </div>
          <div className={styles.imgWrap}>
            <Image src={travel} alt="travel" width={800} height={400} />
            <div className={styles.overlay}>
              <p>Let's Travel</p>
              <span>2023.12.05 ~ 12.10 (1주)</span>
            </div>
          </div>
          <div className={styles.imgWrap}>
            <Image src={eat} alt="eat" width={600} height={400} />
            <div className={styles.overlay}>
              <p>Try Eat</p>
              <span>2023.11.21 ~ 11.26 (1주)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
