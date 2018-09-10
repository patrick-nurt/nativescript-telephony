export function Telephony() {
    return new Promise((resolve) => {
        const manager = application.android.context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
        const results = {
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
        resolve(results);
    });
}
