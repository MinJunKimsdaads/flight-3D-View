import styles from '@/assets/css/common/SelectBar.module.scss';
interface SelectOption {
  name:string;
  value:number|string;
  isSelected:boolean;  
};
interface SelectBarProps {
    selectList:SelectOption[];
    action:(value)=>void;
};
const SelectBar = ({selectList,action}:SelectBarProps) => {
    return (
        <div className={`${styles.selectBar}`}>
            {selectList.map((i)=>(
                <div className={`${styles.selectItem} ${i.isSelected ? styles.selected:''}`} key={i.value} onClick={()=>{action(i.value)}}>{i.name}</div>
            ))}
        </div>
    )
}

export default SelectBar;