public class Trabajador extends Persona{
    
    private double salario;

    public Trabajador (int edad, String nombre, String telefono, double salario) {
        super (edad, nombre, telefono);
        this.salario = salario;
    }
    
    @Override
    public String toString() {
        return "Trabajador: "+super.toString()+", salario=" + salario;
    }
}
