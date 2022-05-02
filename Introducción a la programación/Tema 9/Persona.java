public class Persona {
    //Crea una clase Persona con las siguientes variables: La edad, El nombre,El teléfono
    private int edad;
    private String nombre;
    private String telefono;
    
    public Persona(int edad, String nombre, String telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        return "edad=" + edad + ", nombre=" + nombre + ", telefono=" + telefono;
    }
}
