#include<stdio.h>
int main()
{
 char cArr[4] = {'a','b','c','d'};
 int iArr[4] = {10,20,30,40};
 float fArr[4] = {10.0f,20.0f,30.0f,40.0f};
 double dArr[4] = {10.0,20.0,30.0,40.0};

 printf("size of character Array : %lu\n",sizeof(cArr));  //4
 printf("size of int Array : %lu\n",sizeof(iArr));  ///16
 printf("size of float Array : %lu\n",sizeof(fArr)); ///16
 printf("size of double Array : %lu\n",sizeof(dArr));  ////32



 //printf("size of character Array : %d\n",sizeof(cArr));  //4
 //printf("size of int Array : %d\n",sizeof(iArr));  ///16
 //printf("size of float Array : %d\n",sizeof(fArr)); ///16
// printf("size of double Array : %d\n",sizeof(dArr));  ////32


    return 0;

}