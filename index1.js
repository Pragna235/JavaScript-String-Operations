function extractMiddle(str) {

    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

    result = str.substring(position, position + length)
    return confirm("Middle : "+result);

}
str = prompt("Please enter your string : ");
extractMiddle(str);
