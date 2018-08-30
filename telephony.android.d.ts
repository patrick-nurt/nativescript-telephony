export interface TelephonyInfo {
    countryCode?: string;
    simOperator?: string;
    carrierName?: string;
    callState?: string;
    dataActivity?: string;
    networkType?: number;
    phoneType?: number;
    simState?: number;
    isNetworkRoaming?: string;
    mcc?: string;
    mnc?: string;
}
export declare function Telephony(): Promise<TelephonyInfo>;
