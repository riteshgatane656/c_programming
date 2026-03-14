#include <stdio.h>
int addition(int No1, int No2)
{
 int Ans=0;
 Ans = No1+No2;
 return Ans;
}

int main()
{
   int Ret = 0,A=0,B=0;
   printf("enter first no: \n");
   scanf("%d",&A);

    printf("enter second no: \n");
   scanf("%d",&B);

   Ret= addition(A,B);
   printf("additon is :%d\n",Ret);

    return 0;
}