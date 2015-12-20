var lib64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wsh = new ActiveXObject("WScript.Shell");
var ciphertext = "VGH2SQXW0EU8X2FTIT522W8DZADLRWZUBH3YYZTQ323X04";
var key = "E2WH4UJM90O0PWQZX1VB6IYMLUP34G66TU8OLL09POT67N";
var result = "";
for (var i = 0; i < ciphertext.length; i++)
{
var k = lib64.indexOf(ciphertext.substr(i,1)) - lib64.indexOf(key.substr(i,1));
if (k < 0)
{
k = k + 36;
}
result += lib64.substr(k,1);
}
wsh.Popup(result);
