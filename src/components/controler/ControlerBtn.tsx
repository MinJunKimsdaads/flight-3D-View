import styles from '@/assets/css/controler/ControlerBtn.module.scss';
import { ControlLang } from '@/constants/languageContants';
import { useControlerStore } from '@/store/controlerStore';
import { useRightMenuStore } from '@/store/rightMenuStore';

const ControlerBtn = ({title, img, action}) => {
    const lang = useRightMenuStore(state => state.language);
    const control = useControlerStore(state => state.control);
    return (
        <div className={`${styles.btnBox} ${title === control ? styles.active:''}`} onClick={action}>
            <img src={img} width={35} height={35} alt={title}/>
            <div className={`${styles.title}`}>{ControlLang[lang][title]}</div>
        </div>
    )
}

export default ControlerBtn;

