#include<stdio.h>
//declaration 
#pragma pack(1)
struct demo
{
    int i ; //4 
    char ch ; //1    ///generate padding
    float f;  //4
}; //9
int main()
{
    struct demo dobj;
    printf("%lu\n",sizeof(dobj));  //9
 
    return 0;

}