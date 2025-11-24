import React from 'react';
import icFacebook from '../../assets/icons/facebook.svg';
import icInstagram from '../../assets/icons/instagram.svg';
import FadeInScale from '../animations/FadeInScale.js';

const Footer = () => {
    const facebookUrl = "https://www.facebook.com/Phunxamchuyennghiephue?mibextid=wwXIfr&rdid=BASBzx56WXeDpFk8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FmT7gCRWz%2F%3Fmibextid%3DwwXIfr#";
    const instagramUrl = "https://www.instagram.com/tranton_makeupartist?fbclid=IwY2xjawOGc4BleHRuA2FlbQIxMABicmlkETE3SjRzejNtMnlvcmlyZG4yc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MghjYWxsc2l0ZQEyAAEeNCBvGR0Ev-yuT_Y1n6qTqaaBqKBAl82YdqThd26z4eF_4mf4S7WeG4X4rOs_aem_7j1XeL6zYdK9Zv54Ji_BUw";
    const instagramUrl2 = "https://www.instagram.com/tranton.pmu/?igsh=eGk5aWRuY2pscDJ0&utm_source=qr&fbclid=IwY2xjawORb1tleHRuA2FlbQIxMABicmlkETFKSDFaVlZ5TnN6YXc4WUdBc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHizamOZ4cnplUWxyfPrSpLw3nnWcHv_Lkkze-cSk9YoSdOz72wLNOax5ahF7_aem_smEIG057oBnmMAn1-Hoitw"

    const SocialIcon = ({ iconSrc, href }: { iconSrc: string; href: string }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-md bg-neutral-600 hover:bg-neutral-800 transition-colors flex items-center justify-center mx-1"
            aria-label={href.includes('facebook') ? 'Facebook' : 'Instagram'}
        >
            <img
                src={iconSrc}
                alt={href.includes('facebook') ? 'Facebook Icon' : 'Instagram Icon'}
                className="w-5 h-5 filter invert"
            />
        </a>
    );

    return (
        <footer className="bg-primary py-16 px-4 text-main text-center text-sm border-t border-neutral-200">
            <FadeInScale className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-3">
                    <SocialIcon
                        href={facebookUrl}
                        iconSrc={icFacebook}
                    />

                    <SocialIcon
                        href={instagramUrl}
                        iconSrc={icInstagram}
                    />
                     <SocialIcon
                        href={instagramUrl2}
                        iconSrc={icInstagram}
                    />
                </div>

                <p className="mb-3 text-sm">
                    20 Larwood Drive, Bradford, BD10 0LR
                </p>

                <p className="mb-3 text-sm font-semibold">
                    &copy; 2025 Grace. All rights reserved.
                </p>
                <p className="max-w-xl mx-auto leading-relaxed text-sm">
                    Grace and its logo are trademarks of Grace. All photos are copyrighted and may not be used
                    without permission. Unauthorised use is prohibited.
                </p>

            </FadeInScale>
        </footer>
    );
}

export default Footer;