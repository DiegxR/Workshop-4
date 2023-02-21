import { endpoints } from "./endpoints";
import axios from "axios";

export const getCrew = async() =>{
    const {data} = await axios.get(endpoints.crew)
    return data
}

export const getDestinations = async() =>{
    const {data} = await axios.get(endpoints.destinations)
    return data
}

export const getTechnology = async() =>{
    const {data} = await axios.get(endpoints.technology)
    return data
}