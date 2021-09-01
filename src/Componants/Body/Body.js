import './Body.css'

const demo = [{
    id : 1,
    preview : 'https://static-cdn.jtvnw.net/previews-ttv/live_user_leynainu-440x248.jpg',
    avatar : 'https://static-cdn.jtvnw.net/jtv_user_pictures/f6846d3b-1a13-456a-ad1f-f95962451914-profile_image-50x50.png',
    title : 'Me explaining How shit works hello jj  Me explaining How shit works hello jj kk  kk kkkkkkkkkkkkkkkkkkkkkkkkkkk!!kkkkxxxxxxxxkkkkkkkkkkkk',
    channel : 'flan988',
    views : 500,
    upload_date : '24',
    category : 1
},]
const Video = (props) => {
    const {data} = props
    return  <div className='video'>
    <img width='100%' src={data.preview}></img>
    <div className='videoDetails'>
        
        <img src={data.avatar}></img>
       <div className='info'>
            <span className='title'>{data.title}</span>
            <span className='channel'>
                {data.channel}
            </span>
            <span className='views'>
                {data.views} - {data.upload_date} hours ago
            </span>
        </div>
    </div>
    
</div>
}
const Body = () => {
    function clickHandler(){console.log('hi')}
    return <div className='container'>
            <div className='body'>
                <div className='cards'>
                    <div onClick={clickHandler} className='card'><h2>Games</h2> <i class="fas fa-gamepad"></i></div>
                    <div className='card'><h2>Music</h2><i class="fas fa-music"></i></div>
                    <div className='card'><h2>IRL</h2><i class="fas fa-heart"></i></div>
                    <div className='card'><h2>ESPORTS</h2><i class="fas fa-keyboard"></i></div>
                </div>
                <div className='videos'>
                        {demo.map((vid , index) => (
                                <Video data={vid}/>
                        ))}
                </div>
            </div>
    </div>
}

export default Body