var callbackRegistry = {};

function scriptRequest(arg, onSuccess, onError) {
    var scriptDownloaded = false;
}

var callbackName = 'cb'+ String(Math.random()).slice(-4);



function onSuccess(argument) {
    console.log('Success with ', argument)
}

function onError(argument) {
    console.log('Error with ', argument)
}

var scriptTag = document.createElement('script');

 scriptTag.src = 'https://api.github.com/users/justtrueserj?callback=func';

scriptRequest('https://api.github.com/users/justtrueserj', onSuccess, onError);

document.body.appendChild(scriptTag);