import './Sidebar.css'
const demo1 = [
    {
    id : 1,
    name : 'esl_csgo',
    game : 'Counter-Strike : Global Offensive',
    avatar : 'https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png',
    viewers : 3900
        },
    {
    id : 2,
    name : 'esl_val',
    game : 'Valorant',
    avatar : 'https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-70x70.jpeg',
    viewers : 100
   },
   {
    id : 3,
   name : 'esl_apex',
   game : 'Apex Legends',
   avatar : 'https://static-cdn.jtvnw.net/jtv_user_pictures/0ac5ce67-f783-4ce8-b38e-cd8cd31aa990-profile_image-70x70.png',
   viewers : 100
  },
  {
    id : 4,

  name : 'esl_pubg',
  game : 'PLAYERUNKONWEN"S BATTLEGROUNDS',
  avatar : 'https://static-cdn.jtvnw.net/jtv_user_pictures/ae37597c-a887-4cb3-89f6-9fe7f3c16aa6-profile_image-70x70.png',
  viewers : 100
 },
 {
   id : 5,

 name : 'esl_dota',
 game : 'Dota 2',
 avatar : 'https://static-cdn.jtvnw.net/jtv_user_pictures/81723179-9118-42ca-84dd-6fdfd5df2ab7-profile_image-70x70.png',
 viewers : 100
}    
]

const Subs = (props) => {
    const {data} = props
    const clickHandler = () => alert(data.id)
    return <div onClick={clickHandler} className='subs'>
             <img className='logo' src={data.avatar} ></img>
             <div className='subDetails'>
                <h5>{data.name}</h5>
                <p>{data.game}</p>
             </div>
             
             <span className='redDot'></span><span>
                {data.viewers >= 1000 ? data.viewers / 1000 + 'K' :
                        data.viewers
                    
                }

             </span>
            </div>
}
const Sidebar = () => {
    return <div className='sidebar'>
           <h4>FOLLOWED CHANNELS</h4> 
            {demo1.map((ch , index) => (
               <Subs data={ch}/>
            ))}

            
            <h4>SUGGESTED CHANNELS</h4> 

    </div>
}

export default Sidebar