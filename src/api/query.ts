import { AIRCRAFT_METADATA, ALL_AIRCRAFT_ADDRESS, ARRIVAL, DEPARTURE, HISTORY_AIRCRAFT } from "@/constants/apiConstants";
import axios from "axios";
import {AxiosResponse} from "axios";
import airportJson from '@/assets/data/airport.json';

export const getAllAircraftList = async(): Promise<AxiosResponse<any>> => {
    // const username = import.meta.env.VITE_OPENSKY_USERNAME;
    // const password = import.meta.env.VITE_OPENSKY_PASSWORD;
    // const basicAuth = btoa(`${username}:${password}`);
    try{
        const res = await axios.get(ALL_AIRCRAFT_ADDRESS)
        return res;
    } catch (error) {
        console.warn(error);
        throw error;
    }
}

export const getAllAirportList = async() => {
    try{
        const res = airportJson;
        return res;
    }catch(error){
        console.warn(error);
        throw error;
    }
} 

export const getDepartureList = async(aiport,begin,end): Promise<AxiosResponse<any>> => {
    try{
        const res = await axios.get(`${DEPARTURE}?airport=${aiport}&begin=${begin}&end=${end}`);
        return res;
    } catch (error) {
        console.warn(error);
        throw error;
    }
}

export const getArrivalList = async(aiport,begin,end): Promise<AxiosResponse<any>> => {
    try{
        const res = await axios.get(`${ARRIVAL}?airport=${aiport}&begin=${begin}&end=${end}`);
        return res;
    } catch (error) {
        console.warn(error);
        throw error;
    }
}

export const getMetadata = async(icao24): Promise<AxiosResponse<any>>=>{
    try{
        const res = await axios.get(`${AIRCRAFT_METADATA}/${icao24}`);
        return res;
    } catch(error){
        console.warn(error);
        throw error;
    }
}

export const getHistoryList = async(icao24,begin,end): Promise<AxiosResponse<any>>=>{
    try{
        const res = await axios.get(`${HISTORY_AIRCRAFT}?icao24=${icao24}&begin=${begin}&end=${end}`);
        return res;
    } catch(error){
        console.warn(error);
        throw error;
    }
}