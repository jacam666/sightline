import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterSocial: React.FC = () => {
    return (
        <footer className="bg-green-950 text-center py-8">
            <div className="px-4">
            <h2 className="text-corben text-white text-xl  mb-4">Stay connected with us!</h2>
                <section className=" flex flex-row justify-evenly items-center mx-auto gap-6">
                    <a
                        aria-label="Visit our Facebook"
                        className="btn text-white btn-floating m-1 rounded-sm transition-all duration-300 hover:bg-opacity-80"
                        // style={{ backgroundColor: '#3b5998' }}
                        href="https://m.facebook.com/profile.php?id=61563763839207&name=xhp_nt_"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f text-2xl p-2 "></i>
                    </a>
                    <a
                        aria-label="Visit our Instagram"
                        className="btn text-white btn-floating m-1 rounded-sm transition-all duration-300 hover:bg-opacity-80"
                        // style={{ backgroundColor: '#ac2bac' }}
                        href="https://www.instagram.com/sightline_windows?igsh=MTlheHU3dTh2cG53cA=="
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram text-white text-2xl p-2"></i>
                    </a>
                    
                </section>
            </div>
        </footer>
    );
};

export default FooterSocial;
