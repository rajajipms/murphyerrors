function ReferenceError(){
    console.log(undefinedVariable);
}

function TypeError(){
    const nullValue = null;
    console.log(nullValue.someMethod());
}

function RangeError(){
    const array = new Array(-1);
}

function URIError(){
    decodeURIComponent('%');
}

function EvalError(){
    eval('1 + 1*;');
}

function AggregateErrors(){
    const errors = [new Error("Error 1"), new Error("Error 2")];
    throw new AggregateError(errors);
}

function AggregateErrorsWithMsg(){
    const errors = [new Error("Error 1"), new Error("Error 2")];
    throw new AggregateError(errors,"AggregateErrorsWithMsg");
}

function RecursionError() {
    RecursionError();
}

function UserDefinedError(){
    class CustomError extends Error {
        constructor(message) {
          super(message);
          this.name = "CustomError";
        }
    }
    throw new CustomError("This is a custom error.");
}

function GenerateUnhandledPromiseRejection() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("promise rejected"));
      }, 500);
    });
}

