import { Filter } from '@paysera/http-client-common';
import User from './entity/User';
import UserBasic from './entity/UserBasic';
import UserFilter from './entity/UserFilter';
import UserLegal from './entity/UserLegal';
import UserLegalFilter from './entity/UserLegalFilter';
import UserNatural from './entity/UserNatural';
import UserNaturalFilter from './entity/UserNaturalFilter';
import { Entity } from '@paysera/http-client-common';

import { createInheritanceClient } from './service/createClient';
import InheritanceClient from './service/InheritanceClient';

export {
    Filter,
    User,
    UserBasic,
    UserFilter,
    UserLegal,
    UserLegalFilter,
    UserNatural,
    UserNaturalFilter,
    Entity,
    createInheritanceClient,
    InheritanceClient,
};
