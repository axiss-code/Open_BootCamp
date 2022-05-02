public class Main {
    public static void main(String[] args) {
        
        //Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
        Cliente nCliente = new Cliente(20,"juan","123456789", 1500);
        System.out.println(nCliente.toString()); 

        //Haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
        Trabajador nTrabajador = new Trabajador(25,"jose","111222333", 1230.80);
        System.out.println(nTrabajador.toString());
    }
}
