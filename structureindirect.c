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
     struct demo *ptr = NULL ;

     ptr =&dobj;
    
     ptr->i = 11;
     ptr->ch = 'A';
     ptr->f = 10.0f;

     printf("%d\n",ptr->i);
     printf("%d\n"ptr->c);
     printf("%d\n",ptr->f);

     return 0;

}