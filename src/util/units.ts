export const transformAltUnits = (value,originUnit,transformUnit) => {
    if(originUnit === transformUnit) return value;
    if(originUnit === 'ME'){
        return value * 3.28084;
    }else{
        return value / 3.28084;
    }
}

export const transformDistanceUnits = (value,originUnit,transformUnit) => {
    if(originUnit === transformUnit) return value;
    if(originUnit === 'ME'){
        return value / 1609.344;
    }else{
        return value * 1609.344;
    }
}

export const transformSpeedUnits = (value,originUnit,transformUnit) => {
    if(originUnit === transformUnit) return value;
    if(originUnit === 'ME'){
        return value * 3.6;
    }else{
        return value / 3.6;
    }
}

// const transformTempUnits = (value,originUnit,transformUnit) => {
//     if(originUnit === transformUnit) return value;
//     if(originUnit === 'ME'){
        
//     }else{
        
//     }
// }

export const getUnitForAlt = (unit) => {
    if(unit === 'FE'){
        return 'ft';
    }else{
        return 'm';
    }
}

export const getUnitForDistance = (unit) => {
    if(unit === 'ME'){
        return 'm';
    }else{
        return 'mile';
    }
}

export const getUnitForSpeed = (unit) => {
    if(unit === 'ME'){
        return 'm/s';
    }else{
        return 'km/h';
    }   
}