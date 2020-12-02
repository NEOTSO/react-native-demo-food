import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer ggvcExar1Ypj87Ue5NINzB5z1jvgKCNL0_6hoWUQrBcidSAv9BSP2Kk3-VihxE4hSivPsdG_gbM2uNSRvMFItTeVdd6CRlkF_ZrFW-orMJcqarj4rh5Uwco6ahDGX3Yx",
    },
});
