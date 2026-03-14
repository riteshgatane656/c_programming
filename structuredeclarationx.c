#include<stdio.h>
//declaration 

struct demo
{
    int i ; //4 
    char ch ; //1    ///generate padding
    float f;  //4
}; //12
int main()
{
    struct demo dobj;
    printf("%lu\n",sizeof(dobj));  //12
 
    return 0;

}