N1= parseInt(prompt("Ingrese numero 1"));//Esto es ingresado desde el teclado
N2= parseInt(prompt("Ingrese numero 2")); //Esto es ingresado desde el teclado
//SE INCREMENTA POR SE DEBE HALLAR LOS QUE ESTAN COMPRENDIDOS ENTRE 12 - 20
//13,14,15,16,17,18 Y 19
N1=N1+1;
while(N1<N2){
         R=N1; //SE  OBTIENE EL RESIDUO QUE VIENE A SER EL ULTIMO DIGITO
         if(R==4)   System.out.println(R);
         N1=N1+1;
}