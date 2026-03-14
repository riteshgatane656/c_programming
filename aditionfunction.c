#include <stdio.h>
int addition(int No1, int No2)
{
 int Ans=0;
 Ans = No1+No2;
 return Ans;
}

int main()
{
   int Ret = 0;
   Ret= addition(11,10);
   printf("additon is :%d\n",Ret);

    return 0;
}