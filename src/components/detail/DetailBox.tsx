import { TYPE_AIRCRAFT, TYPE_AIRPORT } from "@/constants/featureConstants";
import { useFeatureSelectStore } from "@/store/featureStore";
import DetailAircraft from "./item/DetailAircraft";
import DetailAirport from "./item/DetailAirport";
import styles from '@/assets/css/detail/Detail.module.scss';
import { useRightMenuStore } from "@/store/rightMenuStore";
import { useEffect } from "react";
import { useControlerStore } from "@/store/controlerStore";

const DetailBox = () => {
    const selectedFeature = useFeatureSelectStore(state => state.selectedFeature);
    if(!selectedFeature) return null;
    const theme = useRightMenuStore(state => state.theme);
    const setControl = useControlerStore(state => state.setControl);
    const type = selectedFeature.get('type');
    useEffect(()=>{
        setControl(null);
    },[]);
    const renderDetailComponent = () => {
        switch (type) {
        case TYPE_AIRCRAFT:
            return <DetailAircraft feature={selectedFeature} theme={theme}/>;
        case TYPE_AIRPORT:
            return <DetailAirport feature={selectedFeature} theme={theme}/>;
        default:
            return null;
        }
    };
    return (
        <div className={`${styles.detailBox}`}>
            {renderDetailComponent()}
        </div>
    )
}

export default DetailBox;