import { Viewer, Cartesian3, Entity, Ion,ConstantPositionProperty, Math, HeadingPitchRoll, Transforms } from 'cesium';
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
  const direction = Number(queryParams.get('heading'))

  const viewerRef = useRef<HTMLDivElement | null>(null);
  const cesiumViewerRef = useRef<Viewer | null>(null);
  const entityRef = useRef<Entity | null>(null);

  // 1. Viewer 초기화 (최초 1회)
  useEffect(() => {
    if (viewerRef.current) {
      cesiumViewerRef.current = new Viewer(viewerRef.current, {
        shouldAnimate: false,  // 시간 애니메이션(Clock 등)을 실행할지 여부 (true: 자동 시간 흐름)
        timeline: false, // 하단의 타임라인 UI 표시 여부
        animation: false, // 좌측 하단 재생/일시정지 컨트롤러 UI 표시 여부
        baseLayerPicker: false, // 우측 상단의 지도 베이스 레이어 선택 버튼 표시 여부
        sceneModePicker: false, // 2D/3D/Columbus View 전환 버튼 표시 여부
        geocoder: false, // 검색창(UI 상단의 위치 검색창) 표시 여부
        navigationHelpButton: false, // 마우스 조작법 도움말 버튼 표시 여부
        infoBox: false, // 엔티티 클릭 시 나오는 정보 상자 UI 표시 여부
        selectionIndicator: false, // 클릭된 엔티티의 강조 원 애니메이션 표시 여부
        homeButton: false, // 🏠 Home 버튼 (기본 시점 복귀) 표시 여부
      });
      const controller = cesiumViewerRef.current.scene.screenSpaceCameraController;
      controller.enableRotate = false;
      controller.enableTilt = false;
      controller.enableLook = false;
      controller.enableTranslate = true;
      controller.enableZoom = true; // 필요 시 생략 가능 (기본값 true)
    }
    return () => {
      cesiumViewerRef.current?.destroy();
    };
  }, []);

  // 2. 카메라 이동 및 엔티티 생성/업데이트
  useEffect(() => {
    if (!cesiumViewerRef.current) return;
    if(!longitude || !latitude || !altitude) return;

    const entityPosition = Cartesian3.fromDegrees(longitude, latitude, altitude);
    const cameraPosition = Cartesian3.fromDegrees(longitude, latitude - 0.075, altitude + 300);
    const positionProperty = new ConstantPositionProperty(entityPosition);

    // 카메라 이동
    cesiumViewerRef.current.camera.setView({ 
      destination: cameraPosition,
      orientation: {
        heading: Math.toRadians(0),
        pitch: Math.toRadians(-10),
        roll: 0,
      }, 
    });

    const heading = Math.toRadians(direction);
    const orientation = Transforms.headingPitchRollQuaternion(
      Cartesian3.fromDegrees(longitude, latitude, altitude),
      new HeadingPitchRoll(heading-90, 0, 0) //East-North-Up
    );

    // 엔티티 생성 또는 위치 업데이트
    if (!entityRef.current) {
      entityRef.current = cesiumViewerRef.current.entities.add(
        new Entity({
          position: positionProperty,
          orientation,
          model: {
            uri: `${(CESIUM_BASE_URL as string)}data/aircraft.glb`,
            minimumPixelSize : 500,
            maximumScale : 100
          }
        })
      );
    } else {
      entityRef.current.position = positionProperty;
    }
  }, [longitude, latitude, altitude]);

  return (
    <div style={{ width: '100%', height: '100vh', position:'absolute',top:'0',left:'0' }}>
      <div ref={viewerRef} style={{ width: '100%', height: '100%', position:'absolute',top:'0',left:'0' }} />
    </div>
  );
};

export default CesiumViewer;