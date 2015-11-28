const bcrypt = require('bcryptjs');
const salt   = 'YOUR_SALT'

require('./local-signup')(salt);
require('./local-login')(salt);
require('./helpers');
