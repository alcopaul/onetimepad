#include <iostream>
#include <string>

using namespace std;

int main()
{
	string lib64 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	string str1 = "";
        string key1 = "";
	string result = "";
	for (int i = 0; i < (int) str1.length(); i++)
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
