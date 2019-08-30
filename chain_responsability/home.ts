abstract class AbstractLogger {
    static INFO:number = 1;
    static DEBUG:number = 2;
    static ERROR:number = 3;
    protected level:number = 0;
    protected nextLogger:AbstractLogger | null = null;
    //constructor( ) {
    //    this.level = 0;
    //    this.nextLogger = null;
    //}
    setNextLogger(nextLogger:AbstractLogger):void{
        this.nextLogger = nextLogger;
    }
    logMessage(level:number, message:string):void{
        if(this.level <= level){
            this.write(message);
        }
        if(this.nextLogger !=null){
            this.nextLogger.logMessage(level, message);
        }
    }
    abstract write(message:string):void;
}
class ConsoleLogger extends AbstractLogger {
    constructor(level:number){
        super();
        this.level = level;
    }
    write(message:string):void {		
        console.log("Console padrão :: Logger: " + message);
    }
}
class ErrorLogger extends AbstractLogger {
    constructor(level:number){
        super();
        this.level = level;
    }
    write(message:string):void {		
        console.log("Console de erros::Logger: " + message);
    }
}
class FileLogger extends AbstractLogger {
    constructor(level:number){
        super();
        this.level = level;
    }
    write(message:string):void {		
        console.log("Arquivo::Logger: " + message);
    }
}
function getChainOfLoggers():AbstractLogger{

    let errorLogger:AbstractLogger = new ErrorLogger(AbstractLogger.ERROR);
    let fileLogger:AbstractLogger = new FileLogger(AbstractLogger.DEBUG);
    let consoleLogger:AbstractLogger = new ConsoleLogger(AbstractLogger.INFO);
    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);
    return errorLogger;	
}
let loggerChain:AbstractLogger = getChainOfLoggers();
loggerChain.logMessage(AbstractLogger.INFO, "Esta é uma informação.");
loggerChain.logMessage(AbstractLogger.DEBUG, "Esta é uma informação de nível de depuração.");
loggerChain.logMessage(AbstractLogger.ERROR, "Esta é uma informação de erro.");