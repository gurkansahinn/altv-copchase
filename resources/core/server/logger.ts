import winston from 'winston'

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'grey',
})

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'debug' : 'info',
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  transports: new winston.transports.Console(),
  format: winston.format.combine(
    winston.format.timestamp({ format: 'MMM DD, YYYY HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => `${info.level} ${info.timestamp} ${info.message}`)
  ),
})

export default logger;