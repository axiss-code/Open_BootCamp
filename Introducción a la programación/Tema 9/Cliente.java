public class Cliente extends Persona{
    //Crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
    private double credito;

    public Cliente (int edad, String nombre, String telefono, double credito) {
        super (edad, nombre, telefono);
        this.credito = credito;
    }
    
    @Override
    public String toString() {
        return "Cliente: "+super.toString()+", credito=" + credito;
    }    
}
