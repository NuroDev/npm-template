import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  level: process.env.LOG_LEVEL || "warn",
  format: format.combine(
    format.metadata({
      fillExcept: ["message", "level", "label"],
    }),
    format.splat()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          ({ level, message }) => `${level}: ${message}`
        )
      ),
    }),
  ],
});
