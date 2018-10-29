var lib64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wsh = new ActiveXObject("WScript.Shell");
var str = "";
var key = "";
var result = "";
for (var i = 0; i < str.length; i++)
{
var k = lib64.indexOf(str.substr(i,1)) + lib64.indexOf(key.substr(i,1));
if (k >= 36)
{
k = k - 36;
}
result += lib64.substr(k,1);
}
wsh.Popup(result);
var fso  = new ActiveXObject("Scripting.FileSystemObject"); 
var fh = fso.CreateTextFile("ciphertext.txt",2, true); 
fh.WriteLine(result); 
fh.Close(); 

