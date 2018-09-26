window.onload = function () {
    function myHello (person:string) {
        return 'hello' +person;
    }

    let name="Jason";
    myHello(name);
    let multiTypeName:  string | number;
    multiTypeName=3;
    multiTypeName = 'helo';
    //multiTypeName = true; // This can only be string or number as defined.
    
}