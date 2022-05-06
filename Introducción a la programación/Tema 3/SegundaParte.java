public class Coche {

    private int nroPuertas;
    
    /*
    Omitimos crear un constructor. Nos sirve que se inicialice la variable a cero.
    Y los métodos getter y setter para la variable nroPuertas
    */
    public int getNroPuertas() {
        return nroPuertas;
    }

    public void setNroPuertas(int nroPuertas) {
        this.nroPuertas = nroPuertas;
    }
    
    //Método main
    public static void main(String[] args) {
        Coche v = new Coche(); //creamos el objeto
        v.setNroPuertas(1); //le establecemos el valor de puertas
        System.out.println("Número de puertas: "+v.getNroPuertas()); //lo mostramos por consola
    }
}
