export async function sendSms(smsTo, smsMessage, accountData) {
	try {
		const accountSid = accountData.accountSid;
		const secret = accountData.twillioAuthToken;
        const client = require('twilio')(accountSid, secret, {
            lazyLoading: true
        });
		// const client = require('twilio')(accountSid, secret);

                // Use this function to send message using callback.
let from = 'FROM_NUMBER'
let to = 'TO_NUMBER'
twilio.messages.create({
    "from": from,
    "to": to,
    "body": 'create using callback'
}, function (err, result) {
    console.log(result.sid);
});

// 		const validNumber = await validateNumber(smsTo, accountData.ISO3166);
// 		if (!validNumber) {
// 			return false;
// 		}
// 		let sendResults = await client.messages
// 			.create({ body: smsMessage, from: accountData.twilioNumber, to: validNumber });

// 		if (sendResults.sid) {
// 			return true;
// 		}
// 		return false;
// 	} catch (err) {
// 		console.error('twilio.jsw - > sendSms error', err.message);
// 		return false;
// 	}
// }

// async function validateNumber(number, ISO3166) {
// 	try {
// 		const phone = require('phone');
// 		const validNumber = await phone(number, ISO3166);
// 		if (validNumber.length > 0) {
// 			return validNumber[0];
// 		}
// 		return false

// 	} catch (err) {
// 		console.error('twilio.jsw - > validateNumber error', err, number);
// 		return false;
// 	}
}
