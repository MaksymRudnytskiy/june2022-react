function Mission({mission}) {
  return (
    <div>
      <p>Mission Name: {mission.mission_name}</p>
      <p>Launch Year: {mission.launch_year}</p>
        <img src={mission.links.mission_patch_small} alt={mission.mission_name}/>
      <hr/>
    </div>
  );
}

export default Mission;