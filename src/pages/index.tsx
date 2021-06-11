import styles from './home.module.scss';
import { Section } from "../components/Section";
import { DayWorkout } from '../components/DayWorkout';
import { Cards } from '../components/Cards';

export default function Home() {
  return (
    <>
      <Section />
      <DayWorkout />
      <Cards />
      <footer className={styles.baseboard}>
      </footer>
    </>
  )
}
