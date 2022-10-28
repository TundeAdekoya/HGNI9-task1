import './App.css';
import profile_image from './Assets/png/profile_image.png'
import share_web from './Assets/svg/share.svg'
import share_mobile from './Assets/svg/share mobile.svg'

function App() {
  return (
    <div>
    <div id="main_content">  

       {/* PROFILE SECTION */}

        <section id='profile_section'>
            <div id="profile_section_static">
                <div>
                    <img src={profile_image} alt="" id="profile_img" />
                <div id="twitter">
                    <p>tunde__dev</p>
                </div>
            </div>
            {/* <div id="slack">
                <p>Adekoya Tunde</p>
            </div> */}
            </div>
            <div className="profile_section_content">
                <div className="share_web">
                    <img src={share_web} alt="" id='share_link' />
                </div>
                <div className="share_mobile">
                    <img src={share_mobile} alt="" id='share_link_mobile' />
                </div>
            </div>
        </section>

        {/* LINK SECTION */}

        <section id="link_section">
            <div className="link_section_content">
                <a href="https://training.zuri.team/" id='btn__zuri'>
                    <div className="links">
                        <p>Zuri Team</p>
                    </div>
                </a>
                <a href="http://books.zuri.team" id='books'>
                    <div className="links">
                        <p>Zuri Team</p>
                    </div>
                </a>
                <a href="http://books.zuri.team" id='book__python'>
                    <div className="links">
                        <p>Python Books</p>
                    </div>
                </a>
                <a href="https://background.zuri.team" id='pitch'>
                    <div className="links">
                        <p>Background Check for Coders</p>
                    </div>
                </a>
                <a href="https://books.zuri.team/design-rules" id='book__design'>
                    <div className="links">
                        <p>Design Books</p>
                    </div>
                </a>
            </div>
        </section>
    </div>
</div>
  );
}

export default App;
