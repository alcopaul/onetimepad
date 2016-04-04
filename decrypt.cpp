#include <iostream>
#include <string>

using namespace std;

int main()
{
	string lib64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	string str1 = "7X73E2CS0WYSCTIAQM";
    	string key1 = "PAULYELENA4028PLOT";
	string result = "";
	for (int i = 0; i < (int) str1.length(); i++)
	{
		int k = lib64.find(str1.substr(i, 1)) - lib64.find(key1.substr(i,1));
		if (k < 0)
		{
			k = k + 36;
		}
		result += lib64.substr(k, 1);
	}
	cout << result << '\n';
	char c = getchar();
	return 0;
}
