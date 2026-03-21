//addition of two numbers industry use
#include<stdio.h>12

float addition(int No1,float No2)
{
    float result=0;
    result=No1+No2;
    return result;
}

float main()
{
    float i=0,j=0;
    float ans=0;
    printf("enter the first number\n");
    scanf("%f",&i);
    printf("enter the second number\n");
    scanf("%f",&j);
    ans=addition(i,j);
    printf("addition is:%f",ans);
    return 0;
}