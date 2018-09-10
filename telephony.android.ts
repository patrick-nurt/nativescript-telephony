//

/**
 *
 *
  .oooooo.	 ooooooooo.   oooooooooooo oooooooooo.	 ooooo ooooooooooooo  .oooooo..o
 d8P'  `Y8b  `888	`Y88. `888'		`8 `888'   `Y8b  `888' 8'	888   `8 d8P'	 `Y8
888			  888	.d88'  888			888		 888  888		888		 Y88bo.
888			  888ooo88P'   888oooo8		888		 888  888		888		  `"Y8888o.
888			  888`88b.	   888	  "		888		 888  888		888			  `"Y88b
`88b	ooo   888  `88b.   888		 o	888		d88'  888		888		 oo		.d8P
 `Y8bood8P'  o888o	o888o o888ooooood8 o888bood8P'	 o888o	   o888o	 8""88888P'
 *
 *
 * http://www.network-science.de/ascii/
 * roman font
 *
 */

/**
	Nathanael Anderson
	- https://github.com/NathanaelA/nativescript-permissions
**/

/**
	Peter Bakondy
	- https://github.com/pbakondy/cordova-plugin-sim
**/

declare var application, android: any

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

export function Telephony(): Promise<TelephonyInfo> {
	return new Promise((resolve) => {

		const manager = application.android.context.getSystemService(android.content.Context.TELEPHONY_SERVICE)
		const results: TelephonyInfo = {
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
		}

		if (results.simOperator.length >= 3) {
			results.mcc = results.simOperator.substring(0, 3)
			results.mnc = results.simOperator.substring(3)
		}

		resolve(results)
	})
}