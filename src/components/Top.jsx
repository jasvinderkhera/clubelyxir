const searchImage = require('../assets/images/logo.png')
function Top(){
    return(
        <div className="top-page">
            <div className="navbar">
                <div className="img-logo"><img src={searchImage} alt="" srcset="" /></div>
                <div className='hamburger'>
                    <button className='ham'>
                        <div className='ham1'></div>
                        <div className='ham2'></div>
                        <div className='ham3'></div>
                        </button></div>
            </div>
            <div className="main">
                <div className='main-content'>
                <p className='p1'>BEHOLD</p>
                <p className='p2'><i>THE LUXURY OF</i></p>
                <p className='p3'>LIVING YOUR OWN MAGIC</p>
                <p className='p4'>A PREMIER MEMBERSHIP FOR THE ELITIST & AMBITIOUS</p>
                <p><button >APPLY FOR MEMBERSHIP</button></p>
            </div>
            </div>
        </div>
    );
}
export default Top