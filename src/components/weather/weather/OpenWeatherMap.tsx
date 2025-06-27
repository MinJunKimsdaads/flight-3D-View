const OpenWeatherMap = () => {
    return (
        <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="windy"
        src="https://embed.windy.com/embed2.html?lat=37.5&lon=127&zoom=5&level=surface&overlay=wind&menu=&message=true&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&detailLat=37.5&detailLon=127&metricWind=default&metricTemp=default&radarRange=-1"
        allowFullScreen
        style={{position:'absolute',top:'0',left:'0'}}
        ></iframe>
    )
}

export default OpenWeatherMap;