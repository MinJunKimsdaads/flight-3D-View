import AnimatedCanvas from 'ol-ext/overlay/AnimatedCanvas';
import Rain from 'ol-ext/particule/Rain';
import Cloud from 'ol-ext/particule/Cloud';
import Snow from 'ol-ext/particule/Snow';
import { SETTING_OVERLAYS } from '@/constants/settingConstant';

export const createRainOverlay = (density:number,angle:number,speed:number) => {
    const rain = new AnimatedCanvas({
        particule: Rain,
        density: density,
        angle: angle,
        speed: speed
    });
    rain.set('id',SETTING_OVERLAYS.RAIN);
    rain.setVisible(true);
    return rain;
};

export const createCloudOverlay = (density:number,angle:number,speed:number) => {
    const cloud = new AnimatedCanvas({
        particule: Cloud,
        density: density,
        angle: angle,
        speed: speed
    });
    cloud.set('id',SETTING_OVERLAYS.CLOUD);
    cloud.setVisible(true);
    return cloud;
};

export const createSnowOverlay = (density:number,angle:number,speed:number) => {
    const snow = new AnimatedCanvas({
        particule: Snow,
        density: density,
        angle: angle,
        speed: speed,
    });
    snow.set('id',SETTING_OVERLAYS.SNOW);
    snow.setVisible(true);
    return snow;
}

export const removeOverlay = (map,id:string) => {
    const overlay = map?.getOverlays().getArray().find((i)=>i.get('id') === id);
    if(overlay){
        map?.removeOverlay(overlay);
    }
}
