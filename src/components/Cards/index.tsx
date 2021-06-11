import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

export function Cards() {
    return (
        <div className="row" style={{width: '100%', paddingTop: '6rem', paddingRight: '20rem'}}>
            <div className="col" style={{marginLeft: '25rem', marginRight: '6rem'}}>
                <div className="card"style={{width: '18rem'}}>
                    <img src="/images/diet.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className={styles.botao}>Read more</button>
                    </div>
                </div>
            </div>
            <div className="col" style={{marginRight: '6rem'}}>
                <div className="card" style={{width: '18rem'}}>
                    <img src="/images/diet.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className={styles.botao}>Read more</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{width: '18rem'}}>
                    <img src="/images/diet.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className={styles.botao}>Read more</button>
                </div>
                </div>
            </div>
      </div>
    );
}