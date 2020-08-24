#include "stdafx.h"

using namespace std;

int main(int argc, char* argv[]) {

	//WASStartup
	WSAData wsaData;
	WORD DLLVersion = MAKEWORD(2, 1);
	if (WSAStartup(DLLVersion, &wsaData) != 0) {

		cout << "Error" << endl;
		exit(1);
	}

	SOCKADDR_IN addr;
	int sizeofaddr = sizeof(addr);

	addr.sin_addr.s_addr = inet_addr("94.19.212.66");
	addr.sin_port = htons(80);
	addr.sin_family = AF_INET;

	SOCKET Connection = socket(AF_INET, SOCK_STREAM, NULL);
	if (connect(Connection, (SOCKADDR*)&addr, sizeof(addr)) != 0) {
		cout << "Error, failed connect" << endl;
		return 1;
	}

	cout << "Client sucesfull connect" << endl;
	
	char msg[256];
	cin >> msg;
	cout << msg << endl;
	if (send(Connection, msg, sizeof(msg), NULL) != 0) {
		cout << "message delivered successfully" << endl;
	}
	else {
		cout << "Message delivery error" << endl;
	}

	system("pause");
	return 0;
}