const searchImage = require('../assets/images/logo.png')

function Footer() {
    return (
        <div className='footer'>
            <div className='upper'>
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Term & Conditions</a></li>
                    <li><a href="">No Refund Policy</a></li>
                </ul>
            </div>
            <div className='lower'>
                <ul>
                    <li><a href="#"><img src={searchImage}/></a></li>
                    <li><a href="tel:9825774876">(+91) 9825774876</a></li>
                    <li><a href="email:info@clubelyxir.com">info@clubelyxir.com</a></li>
                    <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    <li><a href="" className='heart'>Made with <i class="fa fa-heart"></i> ByCreative Hustlers</a></li>
                </ul>
            </div>
            </div>
    );
}

export default Footer