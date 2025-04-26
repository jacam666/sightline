import React from 'react';

const FooterSocial: React.FC = () => {
    return (
        <footer className="bg-green-950 text-center py-8">
            <div className="px-4">
            <h2 className="text-white text-lg font-semibold mb-6">Stay connected with us!</h2>
                <section className="mb-4 flex flex-row justify-evenly items-center mx-auto gap-6">
                    <a
                        aria-label="Visit our Facebook"
                        className="btn text-white btn-floating m-1 rounded-sm transition-all duration-300 hover:bg-opacity-80"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://m.facebook.com/profile.php?id=61563763839207&name=xhp_nt_"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="w-8 h-8 p-1 transition-transform duration-300 transform hover:scale-110 hover:brightness-125" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.403.597 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.796.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
                        </svg>
                    </a>

                    <a
                        aria-label="Visit our Instagram"
                        className="btn text-white btn-floating m-1 rounded-sm transition-all duration-300 hover:bg-opacity-80"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="https://www.instagram.com/sightline_windows?igsh=MTlheHU3dTh2cG53cA=="
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg className="w-8 h-8 p-1 transition-transform duration-300 transform hover:scale-110 hover:brightness-125" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.346 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.346 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.346-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.346-2.633 1.32-3.608C4.528 2.509 5.795 2.226 7.161 2.163 8.426 2.105 8.806 2.094 12 2.094m0-2.163C8.741 0 8.332.013 7.052.072 5.758.132 4.479.443 3.418 1.504 2.358 2.564 2.048 3.843 1.988 5.137.929 6.417.916 6.826.916 12s.013 5.583.072 6.863c.06 1.294.37 2.573 1.43 3.633 1.06 1.06 2.339 1.37 3.633 1.43 1.28.059 1.689.072 6.863.072s5.583-.013 6.863-.072c1.294-.06 2.573-.37 3.633-1.43 1.06-1.06 1.37-2.339 1.43-3.633.059-1.28.072-1.689.072-6.863s-.013-5.583-.072-6.863c-.06-1.294-.37-2.573-1.43-3.633C20.573.443 19.294.132 18 .072 16.719.013 16.309 0 12 0z" />
                            <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.76 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4z" />
                            <circle cx="18.406" cy="5.594" r="1.44" />
                        </svg>
                    </a>
                </section>
            </div>
        </footer>
    );
};

export default FooterSocial;
