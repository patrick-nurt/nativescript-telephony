export interface TelephonyInfo {
    countryCode?: string;
    allowsVOIP?: string;
    carrierName?: string;
    mcc?: string;
    mnc?: string;
}
export declare function Telephony(): Promise<TelephonyInfo>;
