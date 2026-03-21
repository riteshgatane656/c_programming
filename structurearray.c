#include<stdio.h>
//declaration 
#pragma pack(1)
struct hello
{
    float f ; //4
    int arr[3]; //12
}hobj;    //16

int main()
{
    printf("Size of object :%d",sizeof(hobj));
    

     return 0;

}