import ReactGA from "react-ga4";

type Transport = "beacon" | "xhr" | "image" | undefined;

type Consent = "granted" | "denied";

declare global {
    interface Window {
        GA_INITIALIZED: boolean;
    }
}


const GA = {
    /**
    * Initializes Google Analytics for the application.
    *
    * @return {void} This function does not return anything.
    */
    initialize: (consent: Consent = "denied") => {

        if (process.env.NODE_ENV !== "production") {
            return;
        }

        if (window.GA_INITIALIZED) {
            return;
        }
        else {
            window.GA_INITIALIZED = true;
        }

        ReactGA.initialize(process.env.NEXT_PUBLIC_GA4_TRACKING_ID || "");

        ReactGA.gtag('consent', 'default',  {
            'ad_storage': consent,
            'analytics_storage': consent
        });
    },
    updateConsent: (consent: Consent = "denied") => {
        ReactGA.gtag('consent', "update",  {
            'ad_storage': consent,
            'analytics_storage': consent
        }); 
    },
    /**
     * Sends a pageview to Google Analytics with the given path and title.
     *
     * @param {string} path - The path of the page viewed.
     * @param {string} title - The title of the page viewed.
     */
    pageView: (path: string, title: string) => {
        if (window.GA_INITIALIZED) {
            ReactGA.send({ hitType: "pageview", page: path, title: title });
        }
    },
    /**
     * Tracks an event using ReactGA.
     *
     * @param {string} cat - the category of the event
     * @param {string} act - the action of the event
     * @param {string} label - the label of the event (optional)
     * @param {number} value - the value of the event (optional, must be a number)
     * @param {string} transport - the transport method for the event (optional, default "xhr")
     */
    trackEvent: (cat: string, act: string, label: string, value = 99, transport: Transport = "beacon") => {
        if (window.GA_INITIALIZED) {
            ReactGA.event({
                category: cat,
                action: act,
                label: label, // optional
                value: value, // optional, must be a number
                nonInteraction: true, // optional, true/false
                transport: transport, // optional, beacon/xhr/image
            });
        }
        else {
            console.log("GA not initialized");
        }
    }
}

export default GA;
