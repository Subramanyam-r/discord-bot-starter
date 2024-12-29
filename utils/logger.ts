import "colors";
import fs from "fs";

const LogLevel = {
  INFO: "INFO".green,
  ERROR: "ERROR".red,
  FATAL: "FATAL".bgRed.white,
  DEBUG: "DEBUG".yellow,
};

const logFileName = `logs/log_${new Date().toISOString().replace(/[-:.]/g, "_")}.log`;

export class Logger {
  private static writeToFile(fileName: string, logMessage: string) {
    fs.appendFileSync(logFileName, logMessage.replace(/\x1B\[[0-?9;]*[mK]/g, ""));
  }

  private static log(message: String, logLevel: String) {
    let currentTimestamp = new Date().toISOString();
    console.log(`${currentTimestamp.grey} ${logLevel}: ${message}`);

    if (process.env.WRITE_LOGS_TO_FILE == "true") {
      Logger.writeToFile(logFileName, `${currentTimestamp} ${logLevel}: ${message}\n`);
    }
  }

  public static info(message: String) {
    this.log(message, LogLevel.INFO);
  }

  public static error(message: String) {
    this.log(message, LogLevel.ERROR);
  }

  public static debug(message: String) {
    this.log(message, LogLevel.DEBUG);
  }

  public static fatal(message: String) {
    this.log(message, LogLevel.FATAL);
  }
}
