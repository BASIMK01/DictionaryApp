public class ThisKeywordDemo {
    private String name; // Instance variable

    // Constructor that takes a parameter 'name' and assigns it to the instance variable
    public ThisKeywordDemo(String name) {
        this.name = name; // The 'this' keyword refers to the instance variable 'name'
    }

    // Method to print local and instance variables
    public void printName() {
        String name = "Local Name"; // Local variable with the same name
        System.out.println("Local Name: " + name); // Prints the local variable 'name'
        System.out.println("Instance Name: " + this.name); // Prints the instance variable 'name' using 'this'
    }

    public static void main(String[] args) {
        ThisKeywordDemo obj = new ThisKeywordDemo("John"); // Create an object with 'John' as the parameter
        obj.printName(); // Calls the printName method on the object
    }
}
