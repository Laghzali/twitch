import './Sidebar.css'
const data = {
    name : 'esl_csgo',
    game : 'Counter-Strike : Global Offensive',
    viewers : 3900
}
const Subs = () => {
    return <div className='subs'>
             <img className='logo' src='https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png' ></img>
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
            <Subs/>
            <Subs/>
            <Subs/>
            <Subs/>
            <Subs/>
            <Subs/>
            <Subs/>
            <h4>SUGGESTED CHANNELS</h4> 

    </div>
}

export default Sidebar