import axios from "axios";
import { Component } from "react";

const Weather_API = 'dcd9d02c39548d0045f513137555b3c8';

function Weather () {
    getWeather = async(latitude, longitude) => {
        console.log('data');
        const {data} = await axios.get(
            `https://home.openweathermap.org/data/2.5/weather?1at=${latitude}&1on=${longitude}&appid=${Weather_API}`
        );
        console.log(data);
    }

    getLocation = async() => {
        try {
            const response = await Location.requestForegroundPermissionAsync();
            console.log(response);
            const {
                coords: {latitude, longitude},

            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            this.setState({ isLoading: false });
        
        }catch (e) {
            alert('에러가 발생했어요!',e);
        }
    }



    return 
};

export default Weather;