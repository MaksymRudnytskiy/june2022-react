import {useEffect, useState} from "react";
import {getLaunchesAxios} from "../../services/mission.api.axios.service";
import Mission from "../mission/Mission";

function Missions() {
    let [missions, setMissions] = useState([])


    useEffect(() => {
        getLaunchesAxios().then(value => setMissions(value.data))
    }, [])

    return (
        <div>
            {missions.filter(value =>value.launch_year !=='2020').map((mission, index) => (<Mission mission={mission} index={index}/>))}
        </div>
    );
}

export default Missions;