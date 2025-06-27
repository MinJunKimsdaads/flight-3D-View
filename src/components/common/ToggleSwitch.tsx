import styles from '@/assets/css/common/ToggleSwitch.module.scss';

const ToggleSwitch = ({flag, action}) => {
    return (
        <div className={`${styles.toggleSwitch} ${flag ? styles.on : styles.off}`} onClick={action}>
            <div className={`${styles.toggleSwitchCicle}`}></div>
        </div>
    )
}

export default ToggleSwitch;
