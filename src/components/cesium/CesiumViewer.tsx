import { Viewer, Cartesian3, Entity, Ion,ConstantPositionProperty } from 'cesium';
import { useEffect, useRef } from "react";
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { useLocation } from 'react-router-dom';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YWU3ZDhjZC00MmQ3LTQxMDYtYmQ0Mi1mNjJhNmYxMzY3YjIiLCJpZCI6MzE1NDkxLCJpYXQiOjE3NTA4MzY1NzJ9.WnZByGs7wVuhPUFy5tlSFtIxCfUzgtyvyDck79Jh5Zo';

const CesiumViewer = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const longitude = Number(queryParams.get('lon'));
  const latitude = Number(queryParams.get('lat'));
  const altitude = Number(queryParams.get('alt'));

  const viewerRef = useRef<HTMLDivElement | null>(null);
  const cesiumViewerRef = useRef<Viewer | null>(null);
  const entityRef = useRef<Entity | null>(null);

  // 1. Viewer 초기화 (최초 1회)
  useEffect(() => {
    if (viewerRef.current) {
      cesiumViewerRef.current = new Viewer(viewerRef.current, {
        shouldAnimate: false,
        timeline: false,
        animation: false,
        baseLayerPicker: false,
        sceneModePicker: false,
        geocoder: false,
        navigationHelpButton: false,
        infoBox: false,
        selectionIndicator: false,
      });
    }
    return () => {
      cesiumViewerRef.current?.destroy();
    };
  }, []);

  // 2. 카메라 이동 및 엔티티 생성/업데이트
  useEffect(() => {
    if (!cesiumViewerRef.current) return;
    if(!longitude || !latitude || !altitude) return;

    const position = Cartesian3.fromDegrees(longitude, latitude, altitude);
    const positionProperty = new ConstantPositionProperty(position);

    // 카메라 이동
    cesiumViewerRef.current.camera.setView({ 
      destination: position,
      // orientation: {
      //   heading: 0,
      //   pitch: 0,
      //   roll: 0,
      // }, 
    });

    // 엔티티 생성 또는 위치 업데이트
    if (!entityRef.current) {
      entityRef.current = cesiumViewerRef.current.entities.add(
        new Entity({
          position: positionProperty,
          // orientation : Transforms.headingPitchRollQuaternion(
          //   position,
          //   new HeadingPitchRoll(135, 0, 0)
          // ),
          model: {
            uri: `${(CESIUM_BASE_URL as string)}data/aircraft.glb`,
            // minimumPixelSize : 10000,
            // maximumScale : 20000
          }
        })
      );
    } else {
      entityRef.current.position = positionProperty;
    }
  }, [longitude, latitude, altitude]);

  const resetHandler = () => {
    window.close();
  }

  return (
    <div style={{ width: '100%', height: '100vh', position:'absolute',top:'0',left:'0' }}>
      <div ref={viewerRef} style={{ width: '100%', height: '100%', position:'absolute',top:'0',left:'0' }} />
      <div style={{
        width:'30px',
        height:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:'10px',
        left: '10px',
        fontSize:'30px',
        color:'white',
        cursor:'pointer'
      }}
      onClick={()=>{resetHandler()}}
      >
        x
      </div>
    </div>
  );
};

export default CesiumViewer;