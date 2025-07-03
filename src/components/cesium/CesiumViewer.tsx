import { useEffect, useState } from "react";
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { useLocation } from 'react-router-dom';
import styles from '@/assets/css/cesium/Cesium,.module.scss';
import Loader from '../common/Loader';
import { useCesiumViewer } from "@/hook/useCesiumViewer";

import homeImg from '@/assets/img/home.svg';
import menuImg from '@/assets/img/menu.svg';
import aircraftSideImg from '@/assets/img/aircraft-side.svg';
import aircraftTopImg from '@/assets/img/aircraft-top.svg';

const CesiumViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const longitude = Number(queryParams.get('lon'));
  const latitude = Number(queryParams.get('lat'));
  const altitude = Number(queryParams.get('alt'));
  const direction = Number(queryParams.get('heading'));

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {viewerRef, isSideView, addEntity, flyHome, toggleCameraView} = useCesiumViewer({
    longitude,
    latitude,
    altitude,
    direction,
    onAllLoaded: () => setIsLoading(false),
  });

  useEffect(() => {
    addEntity();
  },[longitude,latitude,altitude,direction]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <div className={styles.cesiumWrap}>
      {isLoading && <Loader />}
      <div ref={viewerRef} className={styles.cesiumBox} />
      <div className={styles.btnWrap}>
        <div className={styles.menuBtn} onClick={toggleMenu}>
          <img src={menuImg} width={30} height={30}/>
        </div>
        <div className={`${styles.btnBox} ${isOpen ? styles.open : ''}`}>
          <div className={styles.btn} onClick={()=>{flyHome()}}>
            <img src={homeImg} width={30} height={30}/>
          </div>
          <div className={styles.btn} onClick={()=>{toggleCameraView()}}>
            <img src={isSideView ? aircraftSideImg:aircraftTopImg} width={30} height={30}/>
          </div>
          {/* <div className={styles.btn}></div>
          <div className={styles.btn}></div>
          <div className={styles.btn}></div> */}
        </div>
      </div>
    </div>
  );
};

export default CesiumViewer;