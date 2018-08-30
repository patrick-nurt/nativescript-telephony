"use strict";
var application_1 = require("application");
function Telephony() {
    return new Promise(function (resolve, reject) {
        var manager = application_1.android.context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
        var results = {
            countryCode: manager.getSimCountryIso() || "",
            simOperator: manager.getSimOperator() || "",
            carrierName: manager.getSimOperatorName() || "",
            callState: manager.getCallState() || "",
            dataActivity: manager.getDataActivity() || "",
            networkType: manager.getNetworkType() || "",
            phoneType: manager.getPhoneType() || "",
            simState: manager.getSimState() || "",
            isNetworkRoaming: manager.isNetworkRoaming() || "",
            mcc: "",
            mnc: "",
        };
        if (results.simOperator.length >= 3) {
            results.mcc = results.simOperator.substring(0, 3);
            results.mnc = results.simOperator.substring(3);
        }
        return Promise.resolve(results);
    });
}
exports.Telephony = Telephony;
