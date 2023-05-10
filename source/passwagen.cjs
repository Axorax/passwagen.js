function passwagen(options = {}) {
    let data = {
        numbers: '0123456789',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        punctuation: '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
        symbols: '!@#$%^&*()_+-='
    },
    charsEnabled = {
        numbers: options.numbers ?? true,
        lowercase: options.lowercase ?? true,
        uppercase: options.uppercase ?? true,
        symbols: options.symbols ?? true,
        punctuation: options.punctuation ?? false,
        characters: options.characters || ''
    };
    options = {
        length: options.length || 8,
        amount: options.amount || 1,
        custom: options.custom ?? false,
        strict: options.strict ?? false
    }
    let chars = '',
    passwords = [];
    if (charsEnabled.punctuation == true) charsEnabled.symbols = false;
    if (!options.custom) {
        Object.keys(charsEnabled).forEach(key => {
            if (charsEnabled[key] == true) {
                chars += data[key];
            }
        })
    } else {
        chars = String(charsEnabled.characters);
    }
    function test(password) {
        Object.keys(charsEnabled).forEach(key => {
            if (charsEnabled[key] == true) {
                if (!Boolean(new RegExp(`${data[key]}`, 'g').test(password))) {
                    return false;
                }
            }
        });
        return true;
    }
    function generate() {
        let result = '';
        for (let i = 0; i < options.length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        if (options.strict) {
            test(result);
            if (result) {
                passwords.push(result);
            } else {
                generate();
            }
        } else {
            passwords.push(result);
        }
    }
    for (let am = 0; am < options.amount; am++) {
        generate();
    }
    return passwords.length == 1 ? passwords[0] : passwords;
}

module.exports = passwagen;