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
     dobj.i = 11 ; // .  is the direct accesing operator
     dobj.ch= 'A';
     dobj.f = 10.0f;

    printf("%d\n",dobj.i);  //11
    printf("%c\n",dobj.ch); //A
    printf("%f",dobj.f); //10.000000 their are 6  0's
    return 0;

}