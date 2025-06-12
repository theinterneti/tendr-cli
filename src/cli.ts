#!/usr/bin/env node

import { tendr } from "./tendr";
import { getConfig } from "./util/config";

tendr(process.argv.slice(2)).argv;

// Export functions for external use
export { getConfig };
