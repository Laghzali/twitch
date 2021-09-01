import './Header.css'

const Header  = () =>  {
    return <div className='header'>
        <div className='leftbar'>
            <img className='logo' src='https://pngimg.com/uploads/twitch/twitch_PNG56.png' ></img>
             <span className='lives'>Lives</span>
            <span className='videosButton'>Videos</span>
            </div>
        <div className='search'>
            <input className='searchField' type='text' nam='search' placeholder='search for content'></input>
            <button className='searchButton' ><i class="fas fa-search"></i></button>
            
        </div>
        <div className='rightbar'>
        
            <span className='notif'><i class="fas fa-bell"></i></span>    
            <img className='logo' src='https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png' ></img></div>
        </div>
}

export default Header