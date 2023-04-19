import styles from './ErrorModal.module.css';
import Button from './Button';

export default function ErrorModal ()
{
    return (
        <div className={ styles.backdrop }>
            <div className={ styles.modal }>
                <div className={ styles.header }>
                    <h2>Heading</h2>
                </div>
                <div className={ styles.content }> Content Here</div>
                <Button className={ styles.action } text='Okay' />
            </div>
        </div>
    );
}