import java.util.Scanner;

public class EstructurasCotrol {

    public static int miFuncion (int a, int b, int c){
        return a+b+c;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        //Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
        System.out.print("Un número: ");
        int numeroIf = sc.nextInt();
        
        if (numeroIf>0){
            System.out.println("Es positivo");
        } else if (numeroIf==0){
            System.out.println("Es cero");
        } else {
            System.out.println("Es negativo");
        }
        System.out.println();
        
        /* Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3,
        el bloque de código que tendrá el bucle deberá:
        - Incrementar el valor de la variable en uno cada vez que se ejecute.
        - Mostrarlo por pantalla cada vez que se ejecute. */
        
        int numeroWhile=0;
        
        while (numeroWhile<3){
            System.out.println("Valor de numeroWhile = "+numeroWhile);
            numeroWhile++;
        }
        System.out.println();
        
//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
        int otroWhile=5;
        
        do {
            System.out.println("Valor de otroWhile = "+otroWhile);
            otroWhile++;
        } while (otroWhile<3);
        System.out.println();
        
        //Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea
        //igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
        
        for (int numeroFor=0; numeroFor <= 3; numeroFor++) {
            System.out.println("Valor de numeroFor = "+numeroFor);
        }
        System.out.println();

        //Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año.
        //Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está.
        //También habrá que poner un default para cuando el valor de la variable no sea una estación.
        System.out.print("Dime una estación: ");
        String estacion = sc.next();
        
        switch (estacion){
            case "primavera":
                System.out.println("La primavera comienza el 21 de marzo y acaba el 20 de junio");
                break;
            case "verano":
                System.out.println("El verano comienza el 21 de junio y acaba el 20 de septiembre");
                break;
            case "otoño":
                System.out.println("El otoño comienza el 21 de septiembre y acaba el 20 de diciembre");
                break;
            case "invierno":
                System.out.println("El otoño comienza el 21 de diciembre y acaba el 20 de marzo");
                break;
            default:
                System.out.println("Estación incorrecta.");
        }   
    } 
}
