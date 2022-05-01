public class Encapsulacion {
    
    public static void main(String[] args) {
        //Crear un objeto persona en el main.
        Persona alguien = new Persona();
        
        //Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
        alguien.setEdad(25);
        alguien.setNombre("Juan");
        alguien.setTelefono("123.456.789");
        System.out.println("Nombre: "+alguien.getNombre()
                +"\nEdad: "+alguien.getEdad()
                +"\nTelefono: "+alguien.getTelefono());
    }
    
    //Crear clase Persona.
    public static class Persona {
        //Crear variables privadas edad, nombre y telefono de la clase Persona.
        private int edad;
        private String nombre;
        private String telefono;
        
        //Crear gets y sets de cada propiedad.
        public int getEdad() {
            return edad;
        }

        public void setEdad(int edad) {
            this.edad = edad;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getTelefono() {
            return telefono;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }
    }
}
