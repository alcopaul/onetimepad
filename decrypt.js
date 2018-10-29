var lib64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wsh = new ActiveXObject("WScript.Shell");
var ciphertext = "";
var key = "";
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
