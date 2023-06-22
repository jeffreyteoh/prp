import { useState, useEffect } from 'react';
import CookieConsent, { getCookieConsentValue, Cookies } from "react-cookie-consent";
import GA from '../utils/GA';

function CookieConsentBanner() {
    const [visible, setVisible] = useState("byCookie");

    useEffect(() => {
        const consent: string | undefined = getCookieConsentValue();
        const decline: string | undefined = Cookies.get("decline");

        if (consent === "true") {
            handleAcceptCookie();
        }

        
        if (decline === "true") {
            handleDeclineCookie();
            setVisible("hidden");
        }


    }, []);

    const handleAcceptCookie = () => {
        setVisible("hidden");
        GA.initialize();
    }

    const handleDeclineCookie = () => {
        //remove google analytics cookies
        Cookies.remove("_ga");
        Cookies.remove("_gat");
        Cookies.remove("_gid");
        Cookies.set("decline", "true", { expires: 7 })
        setVisible("hidden");
    };

    // const handleResetCookie = () => {
    //     resetCookieConsentValue();

    //     setVisible("show");

    // }


    // if (decline === "true") {
    //     handleDeclineCookie();
    //     setVisible("hidden");
    // }

    return (
        <CookieConsent
            enableDeclineButton
            buttonText="Accept"
            declineButtonText="Decline"
            onAccept={handleAcceptCookie}
            onDecline={handleDeclineCookie}
            visible={visible}
        >
            <h1>This website uses cookies </h1>
            <p>
                We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
            </p>
        </CookieConsent>
    )
}

export default CookieConsentBanner;