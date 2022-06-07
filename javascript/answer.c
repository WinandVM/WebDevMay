#include <stdio.h>

int main(){
    int maas, zamcik;
    scanf("%d %d", &maas, &zamcik);
    // printf("%d\n", a+b+c);
    int ZamliMaas = maas + ((maas * zamcik) / 100);
    printf("%d", ZamliMaas);
    return 0;
}