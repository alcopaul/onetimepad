#include <iostream>
#include <string>

using namespace std;

int main()
{
	string lib64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	string str1 = "INDIGOREDMUSALTP2T";
        string key1 = "PAULYELENA4028PLOT";
	string result = "";
	for (int i = 0; i < str1.length(); i++)
	{
		int k = lib64.find(str1.substr(i, 1)) + lib64.find(key1.substr(i,1));
		if (k >= 36)
		{
			k = k - 36;
		}
		result += lib64.substr(k, 1);
	}
	cout << result << '\n';
	char c = getchar();
	return 0;
}
