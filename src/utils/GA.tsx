import ReactGA from "react-ga4";

const GA = {
     /**
     * Initializes Google Analytics for the application.
     *
     * @return {void} This function does not return anything.
     */
    initialize: () => {
        if (process.env.NODE_ENV !== "production") {
            return; 
        }

        ReactGA.initialize([
            {
                trackingId: process.env.GA4_TRACKING_ID || "",

            }
        ]);
    },
    /**
     * Sends a pageview to Google Analytics with the given path and title.
     *
     * @param {string} path - The path of the page viewed.
     * @param {string} title - The title of the page viewed.
     */
    pageView : (path: string, title: string) => {
        ReactGA.send({ hitType: "pageview", page: path, title: title });
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
    trackEvent: (cat: string, act: string, label: string, value?, transport = "xhr") => {
        ReactGA.event({
            category: "your category",
            action: "your action",
            label: "your label", // optional
            value: 99, // optional, must be a number
            nonInteraction: true, // optional, true/false
            transport: "xhr", // optional, beacon/xhr/image
        });
    }
}

export default GA;
