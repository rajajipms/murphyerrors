function minReferenceError(){
  console.log(undefinedVariable);
}

function minTypeError(){
  const nullValue = null;
  console.log(nullValue.someMethod());
}

function minRangeError(){
  const array = new Array(-1);
}

function minURIError(){
  decodeURIComponent('%');
}

function minEvalError(){
  eval('1 + 1*;');
}

function minAggregateErrors(){
  const errors = [new Error("Error 1"), new Error("Error 2")];
  throw new AggregateError(errors);
}

function minAggregateErrorsWithMsg(){
  const errors = [new Error("Error 1"), new Error("Error 2")];
  throw new AggregateError(errors,"AggregateErrorsWithMsg");
}

function minRecursionError() {
  minRecursionError();
}

function minUserDefinedError(){
  class CustomError extends Error {
      constructor(message) {
        super(message);
        this.name = "CustomError";
      }
  }
  throw new CustomError("This is a custom error.");
}

function minGenerateUnhandledPromiseRejection() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("promise rejected"));
    }, 500);
  });
}

