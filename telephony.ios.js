export function Telephony() {
    const netinfo = new CTTelephonyNetworkInfo(), carrier = netinfo.subscriberCellularProvider;
    if (carrier) {
        return Promise.resolve({
            allowsVOIP: carrier.allowsVOIP,
            carrierName: carrier.carrierName || "",
            countryCode: carrier.isoCountryCode || "",
            mcc: carrier.mobileCountryCode || "",
            mnc: carrier.mobileNetworkCode || "",
        });
    }
    else {
        return Promise.reject(new Error('Null carrier information!'));
    }
}
