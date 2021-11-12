import { logger } from "./logger";

import type { Foo } from ".";

export function getBar(foo: Foo) {
  logger.warn("Example warning");

  return foo.bar;
}
