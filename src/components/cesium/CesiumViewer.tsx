import { useEffect, useState } from "react";
import 'cesium/Build/Cesium/Widgets/widgets.css';
// import { useLocation } from 'react-router-dom';
import styles from '@/assets/css/cesium/Cesium,.module.scss';
import Loader from '../common/Loader';
import { useCesiumViewer } from "@/hook/useCesiumViewer";

import homeImg from '@/assets/img/home.svg';
import menuImg from '@/assets/img/menu.svg';
import aircraftSideImg from '@/assets/img/aircraft-side.svg';
import aircraftTopImg from '@/assets/img/aircraft-top.svg';

const CesiumViewer = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  // const longitude = Number(queryParams.get('lon'));
  // const latitude = Number(queryParams.get('lat'));
  // const altitude = Number(queryParams.get('alt'));
  // const direction = Number(queryParams.get('heading'));

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({
    lon:0,
    lat:0,
    alt:0,
    heading:0,
  })

  const {viewerRef, isSideView, addMap, addEntity, flyHome, toggleCameraView} = useCesiumViewer({
    longitude:data.lon,
    latitude:data.lat,
    altitude:data.alt,
    direction:data.heading,
    onAllLoaded: () => setIsLoading(false),
  });

  useEffect(() => {
    addMap(null);

    const handleMessage = (event:MessageEvent) => {
      if(event.origin !== 'http://developkmj.dothome.co.kr') return;
      const {payload} = event.data;
      setData({
        lon:payload.lon,
        lat:payload.lat,
        alt:payload.alt,
        heading:payload.heading,
      })
    }

    window.addEventListener('message',handleMessage);
    return ()=>window.removeEventListener('message',handleMessage)
  },[])

  useEffect(() => {
    addEntity();
  },[data]);

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