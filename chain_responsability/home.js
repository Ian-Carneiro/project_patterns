"use strict";
class AbstractLogger {
    constructor() {
        this.level = 0;
        this.nextLogger = null;
    }
    //constructor( ) {
    //    this.level = 0;
    //    this.nextLogger = null;
    //}
    setNextLogger(nextLogger) {
        this.nextLogger = nextLogger;
    }
    logMessage(level, message) {
        if (this.level <= level) {
            this.write(message);
        }
        if (this.nextLogger != null) {
            this.nextLogger.logMessage(level, message);
        }
    }
}
AbstractLogger.INFO = 1;
AbstractLogger.DEBUG = 2;
AbstractLogger.ERROR = 3;
class ConsoleLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    write(message) {
        console.log("Console padrão :: Logger: " + message);
    }
}
class ErrorLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    write(message) {
        console.log("Console de erros::Logger: " + message);
    }
}
class FileLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    write(message) {
        console.log("Arquivo::Logger: " + message);
    }
}
function getChainOfLoggers() {
    let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    let fileLogger = new FileLogger(AbstractLogger.DEBUG);
    let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);
    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);
    return errorLogger;
}
let loggerChain = getChainOfLoggers();
loggerChain.logMessage(AbstractLogger.INFO, "Esta é uma informação.");
loggerChain.logMessage(AbstractLogger.DEBUG, "Esta é uma informação de nível de depuração.");
loggerChain.logMessage(AbstractLogger.ERROR, "Esta é uma informação de erro.");
//# sourceMappingURL=home.js.map