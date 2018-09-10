"use strict";
function Telephony() {
    var netinfo = new CTTelephonyNetworkInfo();
    var carrier = netinfo.subscriberCellularProvider;
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
exports.Telephony = Telephony;
