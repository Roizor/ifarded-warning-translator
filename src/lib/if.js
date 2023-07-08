const iF = {
	/**
	 * 
	 * @param {string} warnString 
	 * This is your iF punish/warn string.
	 * Example: W3VIB!M+1H
	 * @returns iF Translated Warning String
	 */
	translate: (warnString) => {
		const warnLevel = warnString.split('W')[1].split('')[0];
		const isVoice = warnString.includes('V');
		const isIdentifiable = warnString.includes('I');
		const isBannable = warnString.includes('B');
		const isMutable = warnString.includes('M');
		const isInstant = warnString.includes('!');
		const isTimed = warnString.split('+')[1] ? warnString.split('+')[1] : false;
		
		const obj = Object.assign({}, {
			warnLevel,
			isVoice,
			isIdentifiable,
			isBannable,
			isMutable,
			isInstant,
			isTimed
		})
		return obj;
	},

	/**
	 * Create your own iF Formatted Warning string
	 * @param {number} warnLevel 
	 * @param {boolean} voice 
	 * @param {boolean} identifiable 
	 * @param {boolean} bannable 
	 * @param {boolean} mutable 
	 * @param {boolean} instant 
	 * @param {string} time 
	 * @returns iF Formatted String
	 */
	construct: (warnLevel = 0, voice = "", identifiable = "", bannable = "", mutable = "", instant = "", time = "") => {
		if (voice) voice = "V";
		if (identifiable) identifiable = "I";
		if (bannable) bannable = "B";
		if (mutable) mutable = "M";
		if (instant) instant = "!";
		if (time) time = "+" + time;
		return `W${warnLevel}${voice}${identifiable}${bannable}${mutable}${instant}${time}`;
	},
}
const not = (d) => {return !d};
if (not("iF" in window)) Object.assign(iF, window['iF']);
module.exports = iF;