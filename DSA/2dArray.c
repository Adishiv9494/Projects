#include<stdio.h>
#include<conio.h>
int main()
{
    int arr[100][100];
    int row,col;
    printf("Enter the number of rows:- ");
    scanf("%d",&row);
    printf("Enter the number of columns:- ");
    scanf("%d",&col);
    printf("Enter the elements in the array- ");
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            scanf("%d",&arr[i][j]);
        }
    }
    printf("Show the matrix- \n");
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf(" \n");
    }
}