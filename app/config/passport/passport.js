const bcrypt = require('bcryptjs');
const salt   = '$2a$10$wENMOiXaNvkXN9BmCbh4ZO';

require('./local-signup')(salt);
require('./local-login')(salt);
require('./helpers');
