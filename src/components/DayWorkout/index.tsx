import styles from './styles.module.scss';

export function DayWorkout() {
    return (
        <>
        <div className={styles.mainContent}>
        <h1>Treino do dia</h1>
      </div>


      <div className={styles.workoutDay}>

        <div className={styles.text}>
          <h1>Peitoral</h1>
          <span> It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that....
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that....  
          </span>
          <button>Read more</button>

        </div>
        
        <div className={styles.img}>
          <img src="/images/peitoral.svg" alt="" />
        </div>


      </div>
      </>
    );
}
