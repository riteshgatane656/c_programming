#include<stdio.h>
//declaration
struct demo
{
    int i ; //4 
    float f;  //4
};
int main()
{
    struct demo dobj;
    printf("%lu\n",sizeof(dobj));
    
 
    return 0;

}